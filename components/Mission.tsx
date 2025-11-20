"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, TrendingUp } from 'lucide-react';

export const Mission: React.FC = () => {
  return (
    <section id="vision" className="py-32 bg-white dark:bg-[#0B0F19] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 mb-6 text-xs font-bold uppercase tracking-wider">
              <Target size={14} />
              <span>Strategic Pivot</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Not just a Super App. <br/>
              The <span className="text-blue-600 dark:text-cyan-400">Operating System</span> for Indian Business.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              The term "super app" has failed in India. Why? Because consumers resist "all-in-one" solutions that are mediocre at everything. 
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Setu.plus is different. We are not building a convenience store for buyers. We are building the <strong>infrastructure for sellers</strong>. By reframing as a "Merchant OS," we align perfectly with the national push for SME digitalization.
            </p>
            
            <div className="flex flex-col gap-4">
              {[
                "Leveraging Pine Labs' massive distribution network.",
                "Building the 'Picks and Shovels' for the ONDC gold rush.",
                "Deep leadership experience from India Stack & fintech giants."
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
             {/* Visual Representation of B2B to B2B2C */}
             <div className="relative z-10 bg-slate-50 dark:bg-[#111827] rounded-3xl p-8 border border-slate-200 dark:border-white/10 shadow-2xl">
               <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider font-bold mb-1">The Evolution</div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">Value Chain</div>
                  </div>
                  <Layers className="text-slate-300" />
               </div>

               <div className="space-y-6">
                 <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 opacity-50 grayscale">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-mono font-bold text-slate-400">V1</div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Pure B2B API</div>
                      <div className="text-sm text-slate-500">Infrastructure only</div>
                    </div>
                 </div>

                 <div className="flex justify-center text-slate-300">
                   <TrendingUp size={24} />
                 </div>

                 <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-cyan-500/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center font-mono font-bold text-white shadow-lg shadow-blue-500/30">V2</div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-lg">Merchant OS</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Platform + Financial Services + ONDC</div>
                    </div>
                 </div>
               </div>
             </div>
             
             {/* Decorative Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};