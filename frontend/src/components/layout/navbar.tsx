'use client';

import Link from 'next/link';
import { Menu, Search, X } from 'lucide-react';
import { useUIStore } from '@/store/ui-store';
import { MobileNavbar } from '@/components/layout/mobile-navbar';
import BackButton from '../ui/BackButton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Live', href: '/live-matches' },
  { label: 'Matches', href: '/matches' },
  { label: 'Teams', href: '/teams' },
  { label: 'Bracket', href: '/bracket' },
  { label: 'Table Standings', href: '/table-standing' },
  { label: 'Group Standings', href: '/group-standings' },
  { label: 'Top Scorers', href: '/top-scorers' },
];

export function Navbar() {
  const { mobileMenuOpen, setMobileMenuOpen } = useUIStore();
  const router = useRouter();
  const [search, setSearch] = useState('');
  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className=" ">
          <BackButton />
        </div>
        {/* <div className="relative w-full max-w-xs">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && search.trim()) {
                router.push(`/search?q=${search}`);
              }
            }}
            placeholder="Search players, teams, matches"
            className="..."
          />
        </div> */}

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
