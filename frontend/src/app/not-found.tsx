import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-10 text-center shadow-soft">
      <p className="text-sm uppercase tracking-[0.35em] text-brand-300">Page not found</p>
      <h1 className="text-4xl font-semibold text-white">We couldn’t find that page.</h1>
      <p className="max-w-xl text-slate-400">
        The FIFA World Cup 2026 coverage page may have moved. Go back to the homepage to keep
        following live action.
      </p>
      <Link
        href="/"
        className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
      >
        Go home
      </Link>
    </div>
  );
}
