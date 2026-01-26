'use client';

import { motion } from 'framer-motion';
import { Plus, Target, Trophy } from 'lucide-react';

const pots = [
    { id: 1, name: 'MacBook Pro', target: 200000, current: 85000, color: 'bg-purple-500', icon: '💻' },
    { id: 2, name: 'Bali Trip', target: 150000, current: 45000, color: 'bg-teal-500', icon: '🌴' },
    { id: 3, name: 'Emergency Fund', target: 500000, current: 120000, color: 'bg-rose-500', icon: '🚨' },
];

export default function PotsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen pb-24">
        <header className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Savings Pots</h1>
                <p className="text-zinc-400 text-sm">Track your goals and save smarter.</p>
            </div>
            <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors order-last md:order-none">
                <Plus size={24} className="text-white" />
            </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pots.map((pot, i) => {
                const percentage = Math.round((pot.current / pot.target) * 100);
                
                return (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        key={pot.id}
                        className="glass-card p-6 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl">
                                {pot.icon}
                            </div>
                            <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-lg">
                                <Target size={14} className="text-zinc-400" />
                                <span className="text-xs font-mono text-zinc-300">₹{pot.target/1000}k</span>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold mb-1">{pot.name}</h3>
                        <p className="text-2xl font-bold text-zinc-100 mb-4">₹{pot.current.toLocaleString()}</p>

                        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ duration: 1, delay: 0.5 + (i * 0.2), ease: "circOut" }}
                                className={`absolute left-0 top-0 h-full ${pot.color} rounded-full`}
                            />
                        </div>
                        <div className="flex justify-between text-xs text-zinc-400 font-medium">
                            <span>{percentage}%</span>
                            <span>{percentage >= 100 ? 'Completed!' : 'Keep going!'}</span>
                        </div>
                        
                        {percentage >= 50 && (
                            <div className="absolute -bottom-10 -right-10 text-9xl opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity rotate-12">
                                <Trophy />
                            </div>
                        )}
                    </motion.div>
                )
            })}
            
            <button className="h-full min-h-[200px] border-2 border-dashed border-zinc-800 hover:border-zinc-700 rounded-3xl flex flex-col items-center justify-center gap-3 group transition-colors">
                <div className="size-16 rounded-full bg-zinc-900 group-hover:bg-zinc-800 flex items-center justify-center transition-colors">
                    <Plus size={24} className="text-zinc-500 group-hover:text-zinc-300" />
                </div>
                <span className="font-medium text-zinc-500 group-hover:text-zinc-400">Create New Pot</span>
            </button>
        </div>
    </div>
  );
}
