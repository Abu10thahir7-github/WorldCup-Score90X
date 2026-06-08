'use client';

import Link from 'next/link';
import { Menu, Search, X } from 'lucide-react';
import { useUIStore } from '@/store/ui-store';
import { MobileNavbar } from '@/components/layout/mobile-navbar';
import BackButton from '../ui/BackButton';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Live', href: '/live-matches' },
  { label: 'Matches', href: '/matches' },
  { label: 'Teams', href: '/teams' },
  { label: 'Standings', href: '/standings' },
  { label: 'Top Scorers', href: '/top-scorers' },
];

export function Navbar() {
  const { mobileMenuOpen, setMobileMenuOpen } = useUIStore();

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <div className=" ">
        <BackButton />
      </div>
        <div className="relative w-full max-w-xs">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search players, teams, matches"
            suppressHydrationWarning
            className="
          w-full
          pl-10
          pr-4
          py-2
          rounded-lg
          border border-gray-500/20
          bg-[#1f1e2c94]
          text-white
          placeholder:text-gray-400
          outline-none
          focus:border-indigo-500
          focus:ring-2
          focus:ring-indigo-500/20
          transition-all
        "
          />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 text-slate-300 transition hover:border-slate-700 hover:text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <MobileNavbar
        open={mobileMenuOpen}
        links={navLinks}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
