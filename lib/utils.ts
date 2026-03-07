import clsx from 'clsx';
export function cn(...inputs: Array<string | false | null | undefined>) { return clsx(inputs); }
export function formatDate(date: string) { return new Intl.DateTimeFormat('pt-BR',{day:'2-digit',month:'long',year:'numeric'}).format(new Date(date)); }
export function absoluteUrl(path: string) { const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://institutoiar.org.br'; return new URL(path, siteUrl).toString(); }
