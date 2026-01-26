'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ArrowRightLeft, Send, PiggyBank } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Transact', href: '/transactions', icon: ArrowRightLeft },
  { name: 'Send', href: '/send', icon: Send },
  { name: 'Pots', href: '/pots', icon: PiggyBank },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-xl border-t border-white/10 z-50 px-6 flex items-center justify-between safe-area-pb">
        {navItems.map((item) => {
             const isActive = pathname === item.href;
             const Icon = item.icon;
             
             return (
                 <Link 
                     key={item.href} 
                     href={item.href}
                     className="relative flex flex-col items-center justify-center p-2"
                 >
                    {isActive && (
                        <motion.div
                            layoutId="mobile-nav-active"
                            className="absolute -top-3 w-8 h-1 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                     <Icon className={cn("size-6 mb-0.5", isActive ? "text-indigo-400" : "text-zinc-400")} />
                     <span className={cn("text-[10px] font-medium", isActive ? "text-indigo-300" : "text-zinc-400")}>
                         {item.name}
                     </span>
                 </Link>
             )
        })}
    </nav>
  );
}
