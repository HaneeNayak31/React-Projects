'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Send, QrCode, ArrowDownLeft, Wallet, ChevronRight, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { transactions, contacts } from '@/lib/mock-data';
import Link from 'next/link';

export default function Home() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
           <p className="text-zinc-400 text-sm">Welcome back,</p>
           <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">Hanee Nayak</h2>
        </div>
        <div className="size-10 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hanee" alt="User" />
        </div>
      </header>

      {/* Balance Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-50">
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#6366f1" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.8,35.1C59.4,47.1,47.9,57.4,35.2,65.3C22.5,73.2,8.6,78.7,-4.8,87C-18.2,95.3,-31.1,106.4,-42.6,101.4C-54.1,96.4,-64.2,75.3,-72.1,56.8C-80,38.3,-85.7,22.4,-84.9,7C-84.1,-8.4,-76.8,-23.3,-67.1,-36.5C-57.4,-49.7,-45.3,-61.2,-32.3,-69C-19.3,-76.8,-5.4,-80.9,9.4,-97.2L24.2,-113.5" transform="translate(100 100) scale(1.1)" style={{ filter: 'blur(40px)', opacity: 0.3 }} />
            </svg>
        </div>

        <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-zinc-400 text-sm font-medium">Total Balance</span>
                <button 
                  onClick={() => setShowBalance(!showBalance)}
                  className="p-1 rounded-md hover:bg-white/10 transition-colors"
                >
                    {showBalance ? <Eye size={16} className="text-zinc-400" /> : <EyeOff size={16} className="text-zinc-400" />}
                </button>
            </div>
            
            <div className="flex items-baseline gap-1">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    {showBalance ? '₹1,24,592' : '••••••'}
                </h1>
                {showBalance && <span className="text-emerald-400 text-sm font-medium flex items-center gap-1 mb-6"><TrendingUp size={14} /> +12.5%</span>}
            </div>

            <div className="flex gap-4">
                <ActionButton icon={Send} label="Transfer" href="/send" primary />
                <ActionButton icon={ArrowDownLeft} label="Request" />
                <ActionButton icon={QrCode} label="Scan" />
                <ActionButton icon={Wallet} label="Add" />
            </div>
        </div>
      </motion.div>

      {/* Quick Send */}
      <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-zinc-100">Quick Send</h3>
            <Link href="/send" className="text-indigo-400 text-sm font-medium hover:text-indigo-300">View All</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex flex-col items-center gap-2 min-w-[70px]">
                  <button className="size-14 rounded-full border border-dashed border-zinc-600 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                      <Send size={20} className="text-zinc-400" />
                  </button>
                  <span className="text-xs text-zinc-400">New</span>
              </div>
              {contacts.map((contact) => (
                  <div key={contact.id} className="flex flex-col items-center gap-2 min-w-[70px]">
                      <div className="size-14 rounded-full bg-zinc-800 p-0.5 border border-zinc-700">
                          <img src={contact.avatar} alt={contact.name} className="w-full h-full rounded-full" />
                      </div>
                      <span className="text-xs text-zinc-400 truncate w-full text-center">{contact.name.split(' ')[0]}</span>
                  </div>
              ))}
          </div>
      </section>

      {/* Recent Activity */}
      <section>
           <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-zinc-100">Recent Activity</h3>
            <Link href="/transactions" className="text-indigo-400 text-sm font-medium hover:text-indigo-300">View History</Link>
          </div>
          
          <div className="space-y-3">
              {transactions.slice(0, 5).map((tx, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={tx.id} 
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                  >
                      <div className="flex items-center gap-4">
                          <div className={cn("size-10 rounded-full flex items-center justify-center", 
                              tx.type === 'credit' ? "bg-emerald-500/10 text-emerald-500" : "bg-zinc-800 text-zinc-400"
                          )}>
                              {tx.avatar ? (
                                  <img src={tx.avatar} className="size-full rounded-full" />
                              ) : (
                                  <span className="text-xs font-bold">{tx.name[0]}</span>
                              )}
                          </div>
                          <div>
                              <p className="font-medium text-zinc-100">{tx.name}</p>
                              <p className="text-xs text-zinc-400">{tx.category} • {new Date(tx.date).toLocaleDateString()}</p>
                          </div>
                      </div>
                      <div className="text-right">
                          <p className={cn("font-semibold", tx.type === 'credit' ? "text-emerald-400" : "text-zinc-100")}>
                              {tx.type === 'credit' ? '+' : '-'}₹{tx.amount}
                          </p>
                          <p className="text-xs text-zinc-400 capitalize">{tx.status}</p>
                      </div>
                  </motion.div>
              ))}
          </div>
      </section>
    </div>
  );
}

function ActionButton({ icon: Icon, label, primary, href }: { icon: any, label: string, primary?: boolean, href?: string }) {
    const content = (
        <>
            <div className={cn(
                "w-full h-12 rounded-xl flex items-center justify-center transition-all duration-200",
                primary ? "bg-indigo-600 shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:bg-indigo-500" : "bg-white/10 hover:bg-white/15"
            )}>
                <Icon size={20} className={primary ? "text-white" : "text-zinc-300"} />
            </div>
            <span className="text-xs font-medium text-zinc-400">{label}</span>
        </>
    );

    if (href) {
        return (
            <Link href={href} className="flex flex-col items-center gap-2 flex-1 w-full">
                {content}
            </Link>
        )
    }
    
    return (
        <button className="flex flex-col items-center gap-2 flex-1">
            {content}
        </button>
    )
}
