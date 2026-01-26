'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, Delete, Check, Wallet } from 'lucide-react';
import { contacts } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SendMoneyPage() {
  const [step, setStep] = useState<'recipient' | 'amount' | 'confirm' | 'success'>('recipient');
  const [selectedContact, setSelectedContact] = useState<typeof contacts[0] | null>(null);
  const [amount, setAmount] = useState('');
  const router = useRouter();

  const handleContactSelect = (contact: typeof contacts[0]) => {
    setSelectedContact(contact);
    setStep('amount');
  };

  const handleAmountChange = (val: string) => {
    if (val === 'backspace') {
      setAmount(prev => prev.slice(0, -1));
    } else if (val === '.' && amount.includes('.')) {
      return;
    } else {
       if (amount.length > 6) return;
       setAmount(prev => prev + val);
    }
  };

  const handlePay = () => {
    // Simulate API call
    setTimeout(() => {
        setStep('success');
    }, 1500);
  };

  return (
    <div className="h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Header */}
      <header className="p-6 flex items-center gap-4 relative z-10">
        {step !== 'success' && (
            <button 
                onClick={() => step === 'recipient' ? router.push('/') : setStep(prev => prev === 'confirm' ? 'amount' : 'recipient')}
                className="p-2 rounded-full hover:bg-white/5 transition-colors"
            >
                <ChevronLeft size={24} />
            </button>
        )}
        <h1 className="text-xl font-bold">
            {step === 'recipient' ? 'Send Money' : 
             step === 'amount' ? 'Enter Amount' : 
             step === 'confirm' ? 'Confirm Payment' : 'Payment Successful'}
        </h1>
      </header>

      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
            {step === 'recipient' && (
                <RecipientStep key="recipient" onSelect={handleContactSelect} />
            )}
            {step === 'amount' && selectedContact && (
                <AmountStep key="amount" contact={selectedContact} amount={amount} onChange={handleAmountChange} onNext={() => setStep('confirm')} />
            )}
            {step === 'confirm' && selectedContact && (
                <ConfirmStep key="confirm" contact={selectedContact} amount={amount} onPay={handlePay} />
            )}
            {step === 'success' && (
                <SuccessStep key="success" amount={amount} />
            )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function RecipientStep({ onSelect }: { onSelect: (c: any) => void }) {
    const [search, setSearch] = useState('');
    const filtered = contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="px-6 h-full flex flex-col"
        >
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                <input 
                    autoFocus
                    type="text" 
                    placeholder="Search name, username, phone..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full bg-secondary/50 rounded-2xl py-4 pl-12 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
            </div>
            
            <div className="flex-1 overflow-y-auto">
                <h3 className="text-sm font-semibold text-zinc-400 mb-4 px-2">Recents</h3>
                <div className="space-y-2">
                    {filtered.map(contact => (
                        <button 
                            key={contact.id}
                            onClick={() => onSelect(contact)}
                            className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors text-left"
                        >
                            <img src={contact.avatar} className="size-12 rounded-full bg-zinc-800" />
                            <div>
                                <p className="font-semibold text-zinc-100">{contact.name}</p>
                                <p className="text-sm text-zinc-400">{contact.username}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

function AmountStep({ contact, amount, onChange, onNext }: { contact: any, amount: string, onChange: (v: string) => void, onNext: () => void }) {
    const isValid = parseFloat(amount) > 0;

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            className="h-full flex flex-col items-center justify-between pb-8"
        >
            <div className="flex flex-col items-center mt-8">
                 <img src={contact.avatar} className="size-16 rounded-full mb-4 border-2 border-indigo-500/50" />
                 <p className="text-zinc-400">Sending to <span className="text-white font-semibold">{contact.name}</span></p>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex items-baseline gap-1 text-6xl font-bold tracking-tighter">
                    <span className="text-zinc-600">₹</span>
                    <span className={amount ? "text-white" : "text-zinc-700"}>
                        {amount || '0'}
                    </span>
                </div>
            </div>

            <div className="w-full max-w-sm px-6">
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {[1,2,3,4,5,6,7,8,9, '.', 0].map(num => (
                        <button 
                            key={num}
                            onClick={() => onChange(num.toString())}
                            className="h-16 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-2xl font-semibold transition-colors"
                        >
                            {num}
                        </button>
                    ))}
                    <button 
                         onClick={() => onChange('backspace')}
                         className="h-16 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-red-400 transition-colors"
                    >
                        <Delete size={24} />
                    </button>
                </div>

                <button 
                    disabled={!isValid}
                    onClick={onNext}
                    className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/20 active:scale-95 transition-all"
                >
                    Continue
                </button>
            </div>
        </motion.div>
    )
}

function ConfirmStep({ contact, amount, onPay }: { contact: any, amount: string, onPay: () => void }) {
    const [loading, setLoading] = useState(false);

    const handleHold = () => {
        setLoading(true);
        onPay();
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="px-6 h-full flex flex-col justify-between pb-8 bg-zinc-900/50 rounded-t-3xl pt-8"
        >
           <div className="space-y-6">
               <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                   <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
                       <span className="text-zinc-400">To</span>
                       <div className="flex items-center gap-2">
                           <img src={contact.avatar} className="size-6 rounded-full" />
                           <span className="font-semibold">{contact.name}</span>
                       </div>
                   </div>
                   <div className="flex justify-between items-center">
                       <span className="text-zinc-400">Amount</span>
                       <span className="text-2xl font-bold">₹{amount}</span>
                   </div>
               </div>

               <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-3">
                   <div className="size-10 rounded-full bg-zinc-800 flex items-center justify-center">
                       <Wallet size={20} className="text-indigo-400" />
                   </div>
                   <div>
                       <p className="font-medium">FinDash Balance</p>
                       <p className="text-xs text-zinc-400">Available: ₹1,24,592</p>
                   </div>
               </div>
           </div>

           <div className="w-full">
               <button 
                onClick={handleHold}
                disabled={loading}
                className="w-full h-16 rounded-2xl bg-emerald-500 flex items-center justify-center gap-3 font-bold text-lg text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:bg-emerald-400 transition-all active:scale-95"
               >
                   {loading ? (
                       <div className="size-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                   ) : (
                       <>Pay ₹{amount}</>
                   )}
               </button>
           </div>
        </motion.div>
    )
}

function SuccessStep({ amount }: { amount: string }) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="h-full flex flex-col items-center justify-center text-center p-6"
        >
            <div className="size-24 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                <div className="size-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                    <Check size={40} className="text-white" />
                </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-2">Payment Successful!</h2>
            <p className="text-zinc-400 mb-8">You sent <span className="text-white font-medium">₹{amount}</span> successfully.</p>
            
            <Link href="/" className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-medium">
                Back to Home
            </Link>
        </motion.div>
    )
}
