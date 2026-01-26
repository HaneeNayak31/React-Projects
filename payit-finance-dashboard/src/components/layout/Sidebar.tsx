'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ArrowRightLeft, Send, PiggyBank, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Transactions', href: '/transactions', icon: ArrowRightLeft },
  { name: 'Send Money', href: '/send', icon: Send },
  { name: 'Savings Pots', href: '/pots', icon: PiggyBank },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col fixed left-0 top-0 border-r border-white/5 bg-black/40 backdrop-blur-xl z-50">
        <div className="flex h-16 items-center px-6 border-b border-white/5">
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                FinDash
            </h1>
        </div>

        <nav className="flex-1 flex flex-col gap-2 p-4">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                
                return (
                    <Link 
                        key={item.href} 
                        href={item.href}
                        className={cn(
                            "relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group overflow-hidden",
                            isActive ? "text-white" : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                        )}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="sidebar-active"
                                className="absolute inset-0 bg-indigo-600/20 border border-indigo-500/20 rounded-xl"
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <Icon className={cn("size-5 z-10", isActive ? "text-indigo-400" : "text-zinc-400 group-hover:text-zinc-300")} />
                        <span className="z-10 font-medium">{item.name}</span>
                    </Link>
                )
            })}
        </nav>

        <div className="p-4 border-t border-white/5">
            <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                <LogOut className="size-5" />
                <span className="font-medium">Logout</span>
            </button>
        </div>
    </aside>
  );
}
