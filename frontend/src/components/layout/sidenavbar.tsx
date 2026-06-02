'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Home,
  Clock,
  Calendar,
  Trophy,
  Users,
  PersonStanding,
  User,
  Target,
  Newspaper,
  TrendingUp,
  Star,
  Settings,
  ArrowRight,
  LayoutGrid,
} from 'lucide-react';
import Image from 'next/image';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string | number;
  badgeColor?: 'red' | 'purple';
  href: string;
}

export default function SideNavBar() {
  const [activeItem, setActiveItem] = useState('home');

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: <Home size={20} />, href: '/' },
    {
      id: 'live-matches',
      label: 'Live Matches',
      icon: <Clock size={20} />,
      badge: "Soon",
      badgeColor: 'red',
      href: '/live-matches',
    },
    {
      id: 'upcoming',
      label: 'Upcoming',
      icon: <Calendar size={20} />,
      href: '/upcoming',
    },
    {
      id: 'world-cup',
      label: 'World Cup 2026',
      icon: <Trophy size={20} />,
      badge: 'HOT',
      badgeColor: 'purple',
      href: '/world-cup-2026',
    },
    {
      id: 'groups',
      label: 'Groups',
      icon: <LayoutGrid  size={20} />,
      href: '/groups',
    },
    {
      id: 'teams',
      label: 'Teams',
      icon: <PersonStanding size={20} />,
      href: '/teams',
    },
    {
      id: 'players',
      label: 'Players',
      icon: <User size={20} />,
      href: '/players',
    },
    // {
    //   id: 'top-scorers',
    //   label: 'Top Scorers',
    //   icon: <Target size={20} />,
    //   href: '/top-scorers',
    // },
    {
      id: 'news',
      label: 'News',
      icon: <Newspaper size={20} />,
      href: '/news',
    },
    // {
    //   id: 'stats',
    //   label: 'Stats',
    //   icon: <TrendingUp size={20} />,
    //   href: '/stats',
    // },
    // {
    //   id: 'favorites',
    //   label: 'Favorites',
    //   icon: <Star size={20} />,
    //   href: '/favorites',
    // },
    // {
    //   id: 'settings',
    //   label: 'Settings',
    //   icon: <Settings size={20} />,
    //   href: '/settings',
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <div className="w-60 min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-r border-slate-800 flex flex-col overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        className="relative py-4  "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="  text-center  ">
          <span className="text-3xl font-black text-white tracking-tight">Score</span>
          <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          90X
          </span>
        </div>
        <p className="text-[10px] text-center text-slate-400  ">WORLD CUP 2026</p>
      </motion.div>

      {/* Navigation Items */}
      <motion.nav
        className="flex-1 overflow-y-auto py-0 px-3 space-y-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {navItems.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <Link href={item.href}>
              <motion.button
                onClick={() => setActiveItem(item.id)}
                className={`w-full relative flex items-center gap-4 px-4 py-2.5 rounded-xl transition-all duration-300 group ${
                  activeItem === item.id
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white shadow-lg shadow-blue-500/20'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span
                  className={`flex-shrink-0 ${
                    activeItem === item.id ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'
                  } transition-colors`}
                >
                  {item.icon}
                </span>
                <span className="flex-1 text-left font-medium text-xs">{item.label}</span>

                {item.badge && (
                  <motion.div
                    variants={badgeVariants}
                    initial="hidden"
                    animate="visible"
                    className={`flex-shrink-0 flex items-center justify-center min-w-7 h-4 rounded-full text-[10px]   ${
                      item.badgeColor === 'red'
                        ? 'bg-red-500 text-white'
                        : 'bg-purple-500 text-white'
                    }`}
                  >
                    {item.badge}
                  </motion.div>
                )}
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* Promotional Banner */}
      <motion.div
        className="relative mx-3 mb-6 p-4 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Background with gradient and noise */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-purple-900/30 to-red-950/40 border border-red-800/30 rounded-2xl" />
        <div
          className="absolute inset-0 opacity-20 rounded-2xl"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">

          <div className="mb-3">
            <p className="text-yellow-300 text-sm font-bold mb-1">FIFA WORLD CUP</p>
            <p className="text-white text-2xl font-black">2026</p>
          </div>

          <p className="text-slate-300 text-xs leading-snug mb-4">
            11 JUNE - 19 JULY<br />
            USA • CANADA • MEXICO
          </p>

          <motion.a
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-400/30 text-slate-200 text-sm font-semibold hover:bg-slate-800/50 hover:border-slate-300/50 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"
          >
            View Details
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
