const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (p = '/') => `${base}${p.startsWith('/') ? p : '/' + p}`;
export const stars = (r: number) => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));
