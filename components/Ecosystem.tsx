"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Truck, Wrench, Camera, Car, ArrowRight } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const colorMap: Record<string, { light: string; dark: string }> = {
  purple: { light: 'text-purple-600', dark: 'dark:text-purple-400' },
  orange: { light: 'text-orange-600', dark: 'dark:text-orange-400' },
  green: { light: 'text-green-600', dark: 'dark:text-green-400' },
  blue: { light: 'text-blue-600', dark: 'dark:text-blue-400' },
  pink: { light: 'text-pink-600', dark: 'dark:text-pink-400' },
  yellow: { light: 'text-yellow-600', dark: 'dark:text-yellow-400' },
  red: { light: 'text-red-600', dark: 'dark:text-red-400' },
  teal: { light: 'text-teal-600', dark: 'dark:text-teal-400' },
};

const SpotlightCard = ({ name, desc, icon: Icon, color, className, delay, appId }: any) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const colorClasses = colorMap[color] || colorMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group relative border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden rounded-3xl ${className || ''}`}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full p-8 flex flex-col justify-between z-20">
        <div>
          <div className={`w-14 h-14 rounded-2xl 
            bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 
            flex items-center justify-center mb-6
            ${colorClasses.light} ${colorClasses.dark}
            group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm`}>
            <Icon size={28} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{name}</h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">{desc}</p>
        </div>
        
        <Link
          href={`/${appId}`}
          className="mt-8 flex items-center text-sm font-bold text-slate-900 dark:text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
        >
          Explore App <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-32 relative bg-slate-50 dark:bg-[#020617]">
      <div className="container mx-auto px-6">
        <div className="mb-24 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-blue-600 dark:text-cyan-400 mb-4 font-bold tracking-widest uppercase"
          >
            The "Pe" Suite
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight"
          >
            One Super-App.<br />
            <span className="text-slate-400 dark:text-slate-600">Endless Solutions.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-xl font-light leading-relaxed max-w-2xl"
          >
            Replacing fragmented experiences with a unified ecosystem. From daily groceries to home services, Setu.plus covers every aspect of modern life.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
          
          {/* Featured Large Card */}
          <SpotlightCard 
            name="ShopPe" 
            desc="Used goods marketplace connecting buyers to sellers with AI-powered recommendations and instant logistics." 
            icon={ShoppingBag} 
            color="purple" 
            appId="shoppe"
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-purple-50/50 dark:from-white/5 dark:to-purple-900/10"
            delay={0.1}
          />

          <SpotlightCard 
            name="FoodPe" 
            desc="Hyper-local food delivery supporting local restaurants." 
            icon={Truck} 
            color="orange" 
            appId="foodpe"
            delay={0.2}
          />
          
          <SpotlightCard 
            name="KiranaPe" 
            desc="Digitizing neighborhood grocery stores instantly." 
            icon={ShoppingBag} 
            color="green" 
            appId="kiranape"
            delay={0.3}
          />

          <SpotlightCard 
            name="RepairPe" 
            desc="Trusted home services on demand." 
            icon={Wrench} 
            color="blue" 
            appId="repairpe"
            delay={0.4}
          />

          <SpotlightCard 
            name="SnapPe" 
            desc="Professional photography marketplace." 
            icon={Camera} 
            color="pink" 
            appId="snappe"
            delay={0.5}
          />

           <SpotlightCard 
            name="RidePe" 
            desc="Community-driven carpooling and mobility solutions for the modern commuter." 
            icon={Car} 
            color="yellow" 
            appId="ridepe"
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-yellow-50/50 dark:from-white/5 dark:to-yellow-900/10"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};