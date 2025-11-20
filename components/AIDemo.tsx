"use client";

import React, { useState, useEffect } from 'react';
import { Sparkles, Send, Loader2, Store, Lightbulb, ArrowRight, Command, CheckCircle2 } from 'lucide-react';
import { generateStorePreview } from '@/services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';

export const AIDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholders = [
    "I sell handmade organic soaps from my apartment...",
    "I want to start a cloud kitchen for biryani...",
    "Mobile phone repair service in Bangalore...",
    "Yoga instructor looking for local students..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await generateStorePreview(input);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 bg-slate-50 dark:bg-[#020617] relative overflow-hidden" id="demo">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-8 border border-indigo-100 dark:border-indigo-500/20 backdrop-blur-sm"
          >
            <Sparkles size={14} />
            <span className="text-xs font-bold uppercase tracking-wider">Powered by Gemini 2.5</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Instant Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Architecture</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-lg font-light"
          >
            Describe your business idea in plain English. <br className="hidden md:block"/>
            Our AI builds your entire digital onboarding plan in seconds.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Input Interface */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-white/10 rounded-3xl p-3 shadow-2xl shadow-indigo-500/10 flex flex-col md:flex-row gap-2 ring-4 ring-slate-100 dark:ring-white/5"
          >
            <div className="flex-1 relative flex items-center px-6 py-4 md:py-0">
               <Command className="text-slate-400 mr-4 hidden md:block" size={24} />
               <div className="relative w-full">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                    className="w-full bg-transparent text-slate-900 dark:text-white text-xl outline-none z-10 relative placeholder-transparent"
                  />
                  {!input && (
                    <div className="absolute inset-0 flex items-center pointer-events-none">
                       <AnimatePresence mode="wait">
                         <motion.span 
                           key={placeholderIndex}
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 0.4, y: 0 }}
                           exit={{ opacity: 0, y: -10 }}
                           className="text-xl text-slate-900 dark:text-white font-light"
                         >
                           {placeholders[placeholderIndex]}
                         </motion.span>
                       </AnimatePresence>
                    </div>
                  )}
               </div>
            </div>
            
            <button 
              onClick={handleGenerate}
              disabled={loading || !input.trim()}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 min-w-[180px] hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
            >
              {loading ? <Loader2 className="animate-spin" /> : <>Generate <Send size={20} /></>}
            </button>
          </motion.div>

          {/* Results Display */}
          <div className="min-h-[400px] mt-12">
            <AnimatePresence mode="wait">
              {result && (
                <div className="grid md:grid-cols-12 gap-6">
                  {/* Store Identity Card (4 cols) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="md:col-span-5 bg-white dark:bg-[#0F1623] border border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
                  >
                     <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none"></div>
                     
                     <div>
                       <div className="flex items-center gap-3 mb-8">
                         <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                           <Store size={20} />
                         </div>
                         <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Identity Created</span>
                       </div>
                       
                       <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{result.storeName}</h3>
                       <p className="text-lg text-slate-500 dark:text-slate-400 italic font-serif">"{result.tagline}"</p>
                     </div>
                     
                     <div className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5">
                       <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                         <span>Brand Score</span>
                         <span className="text-green-500 font-bold">98/100</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full mt-2 overflow-hidden">
                         <motion.div initial={{ width: 0 }} animate={{ width: '98%' }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-green-500 rounded-full" />
                       </div>
                     </div>
                  </motion.div>

                  {/* Strategy & Apps (8 cols) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="md:col-span-7 flex flex-col gap-6"
                  >
                    {/* Strategy */}
                    <div className="bg-white dark:bg-[#0F1623] border border-slate-200 dark:border-white/10 rounded-3xl p-8 relative overflow-hidden">
                       <div className="flex items-start gap-4">
                         <div className="mt-1 min-w-[24px]">
                           <CheckCircle2 className="text-green-500" size={24} />
                         </div>
                         <div>
                           <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Strategic Execution Plan</h4>
                           <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                             {result.strategy}
                           </p>
                         </div>
                       </div>
                    </div>

                    {/* Recommended Apps */}
                    <div className="flex-1 bg-slate-900 dark:bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                       {/* Decorative circles */}
                       <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                       <h4 className="text-sm font-bold uppercase tracking-wider opacity-70 mb-6">Recommended Tech Stack</h4>
                       
                       <div className="grid grid-cols-2 gap-4">
                         {result.suggestedApps.map((app: string, idx: number) => (
                           <motion.div 
                             key={app}
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.3 + idx * 0.1 }}
                             className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10"
                           >
                             <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                             <span className="font-medium">{app}</span>
                           </motion.div>
                         ))}
                       </div>

                       <div className="mt-8 flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer group">
                         <span>Deploy configuration</span>
                         <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                       </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 opacity-50 mt-20">
                 <Store size={48} className="mb-4" strokeWidth={1} />
                 <p>AI is ready to architect your business</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};