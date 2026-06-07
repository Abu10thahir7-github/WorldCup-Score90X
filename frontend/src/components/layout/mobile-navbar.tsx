'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

interface MobileNavbarProps {
  open: boolean;
  links: Array<{ label: string; href: string }>;
  onClose: () => void;
}

export function MobileNavbar({ open, links, onClose }: MobileNavbarProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="overflow-hidden border-t border-slate-800 bg-slate-950/95 md:hidden"
        >
          <div className="space-y-2 px-4 py-4">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
