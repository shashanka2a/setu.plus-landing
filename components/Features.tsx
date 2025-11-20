"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Store, CreditCard, PieChart, Landmark, ArrowRight } from 'lucide-react';

const FeatureCard = ({ title, desc, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon size={120} />
    </div>
    
    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-6 text-slate-900 dark:text-white group-hover:scale-110 transition-transform duration-300 border border-slate-100 dark:border-white/10">
      <Icon size={28} />
    </div>
    
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 relative z-10">
      {desc}
    </p>
    
    <div className="flex items-center text-blue-600 dark:text-cyan-400 font-semibold group-hover:gap-3 transition-all">
      <span>Learn more</span>
      <ArrowRight size={16} className="ml-2" />
    </div>
  </motion.div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-slate-50 dark:bg-[#020617] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Four Pillars of <span className="text-blue-600 dark:text-cyan-400">Growth</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our platform is built on a foundation of robust infrastructure designed to solve the most critical pain points for Indian merchants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard 
            title="ONDC Seller Suite"
            desc="Tools for easy onboarding, catalog digitization, inventory management, and order processing on the ONDC network. We automate the 'unglamorous' work of e-commerce."
            icon={Store}
            delay={0.1}
          />
          <FeatureCard 
            title="Unified Payments"
            desc="Seamless integration of UPI and Bharat Bill Payment System (BBPS). Accept payments from any ONDC buyer app and manage recurring collections with zero friction."
            icon={CreditCard}
            delay={0.2}
          />
          <FeatureCard 
            title="Embedded Finance"
            desc="Direct access to working capital loans and insurance. Leveraging the Account Aggregator framework to build a superior, data-driven underwriting engine."
            icon={Landmark}
            delay={0.3}
          />
          <FeatureCard 
            title="Business Analytics"
            desc="A comprehensive dashboard providing merchants with actionable insights on sales, customer behavior, and financial health derived from platform data."
            icon={PieChart}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};