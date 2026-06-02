import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './global.css';
import { QueryProvider } from '@/providers/query-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import SideNavBar from '@/components/layout/sidenavbar';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Score90X | FIFA World Cup 2026 Live Score',
  description: 'Professional live score platform for the FIFA World Cup 2026.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <QueryProvider>
          <ThemeProvider defaultTheme="dark">
            <div className="flex h-screen  bg-slate-950">
              {/* Desktop Sidebar */}
              <div className="hidden lg:block">
                <SideNavBar />
              </div>


              {/* Mobile Overlay */}

              {/* Main Content */}
              <div className="flex-1 flex flex-col overflow-hidden">
    <Navbar />

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto">{children}</div>
              </div>
            </div>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
