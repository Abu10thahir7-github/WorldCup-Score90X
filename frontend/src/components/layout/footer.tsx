import { Facebook, Instagram, Shield, Trophy, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/public/logos/transparant-logo.png';
import Image from 'next/image';
export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#030712] text-white">
      <div className="mx-auto max-w-[1800px]  py-5">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="space-y-1">
            <Link href="/" className="flex items-center ">
              <Image
                src={Logo}
                alt="Score90X Logo"
                className="w-full h-full"
                width={150}
                height={150}
              />
            </Link>

            <div>
              <h3 className="mb-1 text-center font-semibold">Follow Us</h3>

              <div className="flex gap-3 justify-center">
                <div className="rounded-full  border-slate-700 border hover:bg-indigo-700 hover:border-slate-300/50 transition-all duration-300 group p-2">
                  <Facebook size={18} />
                </div>

                <div className="rounded-full  border-slate-700 border hover:bg-indigo-700 hover:border-slate-300/50 transition-all duration-300 group p-2">
                  <Twitter size={18} />
                </div>

                <div className="rounded-full  border-slate-700 border hover:bg-indigo-700 hover:border-slate-300/50 transition-all duration-300 group p-2">
                  <Instagram size={18} />
                </div>

                <div className="rounded-full  border-slate-700 border hover:bg-indigo-700 hover:border-slate-300/50 transition-all duration-300 group p-2">
                  <Youtube size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-2 underline text-lg font-bold">Explore</h3>

            <ul className="space-y-2 text-sm text-slate-400">
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
            <h3 className="mb-2 underline text-lg font-bold">World Cup 2026</h3>

            <ul className="space-y-2 text-sm text-slate-400">
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
            <h3 className="mb-2 underline text-lg font-bold">Account</h3>

            <ul className="space-y-2 text-sm text-slate-400">
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
            <h3 className="mb-2 underline text-lg font-bold">Company</h3>

            <ul className="space-y-2 text-sm text-slate-400">
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
        <div className="mt-3 px-5 flex flex-col gap-4 border-t border-slate-800 pt-3 md:flex-row md:items-center md:justify-between">
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
