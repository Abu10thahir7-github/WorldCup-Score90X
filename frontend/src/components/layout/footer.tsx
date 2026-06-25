import { Shield, Trophy } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
      <footer className="border-t border-slate-800 bg-[#030712] text-white">
      <div className="mx-auto max-w-[1800px] px-6 py-12">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="space-y-5">
            <div>
              <h2 className="text-4xl font-black">
                SCORE<span className="text-purple-500">90X</span>
              </h2>

              <p className="mt-1 text-xs tracking-[4px] text-slate-400">LIVE • SCORES • NEWS</p>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Your ultimate destination for live scores, match updates, World Cup news, stats and
              everything football.
            </p>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="flex items-center gap-3">
                <Trophy className="text-purple-500" size={24} />

                <div>
                  <h3 className="font-semibold">FIFA World Cup 2026</h3>

                  <p className="text-xs text-slate-400">Live • Exclusive • Unstoppable</p>
                </div>
              </div>
            </div>

            {/* <div>
              <h3 className="mb-3 font-semibold">Follow Us</h3>

              <div className="flex gap-3">
                <div className="rounded-full border border-slate-700 p-2">
                  <Facebook size={18} />
                </div>

                <div className="rounded-full border border-slate-700 p-2">
                  <Twitter size={18} />
                </div>

                <div className="rounded-full border border-slate-700 p-2">
                  <Instagram size={18} />
                </div>

                <div className="rounded-full border border-slate-700 p-2">
                  <Youtube size={18} />
                </div>
              </div>
            </div> */}
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Explore</h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <Link href="#">Live Matches</Link>
              </li>
              <li>
                <Link href="#">Upcoming Matches</Link>
              </li>
              <li>
                <Link href="#">Teams</Link>
              </li>
              <li>
                <Link href="#">Standings</Link>
              </li>
              <li>
                <Link href="#">Statistics</Link>
              </li>
              <li>
                <Link href="#">News</Link>
              </li>
            </ul>
          </div>

          {/* World Cup */}
          <div>
            <h3 className="mb-5 text-lg font-bold">World Cup 2026</h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <Link href="#">Groups</Link>
              </li>
              <li>
                <Link href="#">Fixtures</Link>
              </li>
              <li>
                <Link href="#">Venues</Link>
              </li>
              <li>
                <Link href="#">Squads</Link>
              </li>
              <li>
                <Link href="#">Top Scorers</Link>
              </li>
              <li>
                <Link href="#">History</Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Account</h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <Link href="#">My Profile</Link>
              </li>
              <li>
                <Link href="#">Favorites</Link>
              </li>
              <li>
                <Link href="#">Notifications</Link>
              </li>
              <li>
                <Link href="#">Settings</Link>
              </li>
              <li>
                <Link href="#">Login</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Company</h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-500">© 2026 Score90X. All rights reserved.</div>

          <div className="flex items-center gap-2 text-slate-400">
            <Shield size={16} />
            <span className="text-sm">Secure Payments</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
