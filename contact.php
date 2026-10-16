<?php
// Contact form handler for aitoolsoptimizer.com (Hostinger, PHP mail()).
declare(strict_types=1);

const TO_ADDRESS   = 'contact@aitoolsoptimizer.com';
// Hostinger only relays mail() From an existing mailbox on the domain.
const FROM_ADDRESS = 'contact@aitoolsoptimizer.com';
const FROM_NAME    = 'AI Tools Optimizer Website';
const MIN_SECONDS  = 3;        // form must be open at least this long
const MAX_AGE      = 86400;    // ...and no more than a day
const RATE_LIMIT   = 5;        // submissions per IP...
const RATE_WINDOW  = 3600;     // ...per hour
const TOPICS = ['General question', 'Suggest a tool', 'Partnership / affiliate', 'Advertising'];

$wantsJson = stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false
  || ($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') === 'fetch';

function respond(bool $ok, string $msg, int $code = 200): void {
  global $wantsJson;
  http_response_code($code);
  if ($wantsJson) {
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode(['ok' => $ok, 'message' => $msg]);
  } elseif ($ok) {
    header('Location: /contact/thanks/', true, 303);
  } else {
    header('Content-Type: text/html; charset=utf-8');
    $m = htmlspecialchars($msg, ENT_QUOTES, 'UTF-8');
    echo "<!doctype html><meta charset=utf-8><meta name=viewport content='width=device-width'><title>Message not sent</title>"
       . "<body style='font-family:system-ui;background:#070A13;color:#E6ECFF;padding:3rem;max-width:40rem;margin:auto'>"
       . "<h1>Message not sent</h1><p>$m</p><p><a style='color:#00E5FF' href='/contact/'>Back to the contact form</a> or email "
       . "<a style='color:#00E5FF' href='mailto:" . TO_ADDRESS . "'>" . TO_ADDRESS . "</a>.</p></body>";
  }
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { header('Location: /contact/', true, 303); exit; }

// Single-line field: strip CR/LF and control chars (prevents header injection).
function line(string $v, int $max): string {
  $v = preg_replace('/[\r\n\t\x00-\x1F\x7F]+/u', ' ', $v) ?? '';
  return mb_substr(trim($v), 0, $max);
}

$name    = line((string)($_POST['name'] ?? ''), 100);
$email   = line((string)($_POST['email'] ?? ''), 254);
$topic   = line((string)($_POST['topic'] ?? ''), 60);
$message = trim(str_replace("\0", '', (string)($_POST['message'] ?? '')));
$honey   = (string)($_POST['website'] ?? '');
$ts      = (int)($_POST['ts'] ?? 0);

// Spam checks: honeypot + time check. Pretend success to bots for the honeypot.
if ($honey !== '') respond(true, 'Thanks! Your message has been sent.');
$age = time() - intdiv($ts, 1000);
if ($ts <= 0 || $age < MIN_SECONDS || $age > MAX_AGE) respond(false, 'Please wait a few seconds after loading the page, then try again (JavaScript must be enabled).', 400);

// Validation
if ($name === '' || $email === '' || $message === '') respond(false, 'Please fill in your name, email and message.', 422);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) respond(false, 'Please enter a valid email address.', 422);
if (mb_strlen($message) < 5 || mb_strlen($message) > 5000) respond(false, 'Your message should be between 5 and 5,000 characters.', 422);
if (!in_array($topic, TOPICS, true)) $topic = 'General question';
if (preg_match_all('~https?://~i', $message) > 3) respond(false, 'Please include no more than 3 links.', 422);

// Rate limit per IP (hashed), stored in a temp file.
$ip  = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rlf = rtrim(sys_get_temp_dir(), '/') . '/aito_contact_' . hash('sha256', $ip . __FILE__) . '.json';
$now = time();
$hits = is_file($rlf) ? (json_decode((string)@file_get_contents($rlf), true) ?: []) : [];
$hits = array_values(array_filter($hits, fn($t) => is_int($t) && $t > $now - RATE_WINDOW));
if (count($hits) >= RATE_LIMIT) respond(false, 'Too many messages from your connection. Please try again later or email us directly.', 429);
$hits[] = $now;
@file_put_contents($rlf, json_encode($hits), LOCK_EX);

// Build and send
$encName = '=?UTF-8?B?' . base64_encode($name) . '?=';
$subject = '=?UTF-8?B?' . base64_encode("[AI Tools Optimizer] $topic from $name") . '?=';
$body = "Name: $name\nEmail: $email\nTopic: $topic\nIP: $ip\nSent: " . gmdate('Y-m-d H:i:s') . " UTC\n\n$message\n";
$headers = implode("\r\n", [
  'From: ' . FROM_NAME . ' <' . FROM_ADDRESS . '>',
  "Reply-To: $encName <$email>",
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'Content-Transfer-Encoding: 8bit',
  'X-Mailer: aitoolsoptimizer-contact',
]);
$ok = @mail(TO_ADDRESS, $subject, $body, $headers, '-f' . FROM_ADDRESS);
if (!$ok) $ok = @mail(TO_ADDRESS, $subject, $body, $headers); // some hosts reject -f
if (!$ok) error_log('contact.php: mail() failed: ' . json_encode(error_get_last()));
if (!$ok) respond(false, 'Sorry, the message could not be sent right now. Please email us directly.', 500);
respond(true, "Thanks, $name! Your message has been sent. Andrew will get back to you soon.");
