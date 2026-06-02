import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Score90X</p>
          <p className="mt-2 text-sm text-slate-400">
            Professional FIFA World Cup 2026 live score platform.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/standings" className="transition hover:text-white">
            Standings
          </Link>
          <Link href="/top-scorers" className="transition hover:text-white">
            Top Scorers
          </Link>
        </div>
      </div>
    </footer>
  );
}
