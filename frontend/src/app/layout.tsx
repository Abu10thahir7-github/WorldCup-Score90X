import { Analytics } from '@vercel/analytics/next';
import type { ReactNode } from 'react';
import './global.css';
import { QueryProvider } from '@/providers/query-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import SideNavBar from '@/components/layout/sidenavbar';

export const metadata = {
  title: "Score90X | FIFA World Cup 2026 Live Score",
  description: "Professional live score platform.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      // { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />

      </head>
      <body suppressHydrationWarning className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <QueryProvider>
          <ThemeProvider defaultTheme="dark">
            <div className="flex h-screen  bg-slate-950">
              {/* Desktop Sidebar */}
              <div className="hidden lg:block">
                <SideNavBar />
              </div>

              <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto">{children}
                <Analytics />
                <Footer />
                </div>
              </div>
            </div>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
