#!/usr/bin/env bash
# Manual deploy: builds production (deploy branch, Hostinger) and preview (gh-pages, base /aitoolsoptimizer).
set -euo pipefail
cd "$(dirname "$0")/.."
SHA=$(git rev-parse --short HEAD)
publish() { # $1 branch, $2 extra
  local wt=/tmp/wt-$1; rm -rf "$wt"; git worktree prune
  git worktree add -f "$wt" "$1" >/dev/null 2>&1 || git worktree add -f -B "$1" "$wt" "origin/$1"
  (cd "$wt" && git reset -q --hard "origin/$1" && git rm -rq --ignore-unmatch . >/dev/null)
  cp -a dist/. "$wt"/; [ "$1" = gh-pages ] && touch "$wt/.nojekyll"
  for f in .htaccess contact.php ads.txt robots.txt; do [ -f "$wt/$f" ] || { echo "missing $f"; exit 1; }; done
  (cd "$wt" && git add -A && (git commit -qm "Build from main $SHA" || true) && git push -q origin "$1")
  git worktree remove -f "$wt"
}
npm run build >/tmp/build-prod.log 2>&1 || { tail -30 /tmp/build-prod.log; exit 1; }
grep -q 'G-8QRK7THNC1' dist/index.html && grep -q 'ca-pub-7909541570116920' dist/index.html || { echo "GA/AdSense missing"; exit 1; }
publish deploy
SITE=https://drewbotcarrothers.github.io BASE=/aitoolsoptimizer npm run build >/tmp/build-pages.log 2>&1 || { tail -30 /tmp/build-pages.log; exit 1; }
publish gh-pages
npm run build >/dev/null 2>&1
echo "deployed $SHA"
