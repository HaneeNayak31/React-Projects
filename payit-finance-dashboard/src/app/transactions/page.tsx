'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { transactions } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const filters = ['All', 'Expenses', 'Income'];

export default function TransactionsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTransactions = transactions.filter(tx => {
    const matchesFilter = 
      activeFilter === 'All' ? true :
      activeFilter === 'Expenses' ? tx.type === 'debit' :
      activeFilter === 'Income' ? tx.type === 'credit' : true;
      
    const matchesSearch = tx.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen">
      <div className="flex flex-col gap-6 sticky top-0 bg-background/80 backdrop-blur-xl z-20 pb-4 pt-2">
          <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Transactions</h1>
              <button className="p-2 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
                  <Filter size={20} />
              </button>
          </div>

          {/* Search & Filter */}
          <div className="space-y-4">
              <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search transactions..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-secondary/50 border-none rounded-2xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20"
                  />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {filters.map(filter => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                            activeFilter === filter 
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                                : "bg-secondary text-zinc-400 hover:text-zinc-200"
                        )}
                      >
                          {filter}
                      </button>
                  ))}
              </div>
          </div>
      </div>

      <div className="space-y-4 pt-2 pb-20">
          {filteredTransactions.length === 0 ? (
              <div className="text-center py-20 text-zinc-400">
                  No transactions found.
              </div>
          ) : (
              filteredTransactions.map((tx, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    key={tx.id}
                    className="group flex items-center justify-between p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-white/5 transition-all duration-200"
                  >
                      <div className="flex items-center gap-4">
                          <div className={cn(
                              "size-12 rounded-2xl flex items-center justify-center transition-colors",
                              tx.type === 'credit' ? "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20" : "bg-rose-500/10 text-rose-500 group-hover:bg-rose-500/20"
                          )}>
                              {tx.type === 'credit' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                          </div>
                          <div>
                              <p className="font-semibold text-zinc-200">{tx.name}</p>
                              <p className="text-xs text-zinc-400">{new Date(tx.date).toLocaleDateString()} • {tx.category}</p>
                          </div>
                      </div>
                      <div className="text-right">
                          <p className={cn("font-bold text-lg", tx.type === 'credit' ? "text-emerald-400" : "text-zinc-200")}>
                              {tx.type === 'credit' ? '+' : '-'}₹{tx.amount}
                          </p>
                          <p className="text-xs text-zinc-400 capitalize">{tx.status}</p>
                      </div>
                  </motion.div>
              ))
          )}
      </div>
    </div>
  );
}
