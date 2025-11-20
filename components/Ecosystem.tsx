"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Truck, Wrench, Camera, Car, Stethoscope, Ticket, ArrowRight } from 'lucide-react';
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
  const [isLoading, setIsLoading] = React.useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleClick = (e: React.MouseEvent) => {
    setIsLoading(true);
    // Navigation will happen via Link, but we show loading state
  };

  const colorClasses = colorMap[color] || colorMap.blue;

  return (
    <Link href={`/${appId}`} onClick={handleClick}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`group relative border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden rounded-3xl cursor-pointer ${className || ''}`}
        onMouseMove={handleMouseMove}
      >
        {/* Loading Overlay */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-30 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 rounded-full"
                style={{
                  border: `3px solid ${color === 'purple' ? '#9333EA' : color === 'orange' ? '#EA580C' : color === 'green' ? '#16A34A' : color === 'blue' ? '#2563EB' : color === 'pink' ? '#DB2777' : '#CA8A04'}`,
                  borderTopColor: 'transparent',
                }}
              />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Loading...</span>
            </div>
          </motion.div>
        )}

        {/* Shimmer Loading Effect */}
        <motion.div
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-0"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          }}
        />

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
            <motion.div 
              className={`w-14 h-14 rounded-2xl 
                bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 
                flex items-center justify-center mb-6
                ${colorClasses.light} ${colorClasses.dark}
                group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm`}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              <Icon size={28} strokeWidth={1.5} />
            </motion.div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{name}</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">{desc}</p>
          </div>
          
          <div className="mt-8 flex items-center text-sm font-bold text-slate-900 dark:text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Explore App <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </motion.div>
    </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <SpotlightCard 
            name="ShopPe" 
            desc="Used goods marketplace with AI-powered recommendations." 
            icon={ShoppingBag} 
            color="purple" 
            appId="shoppe"
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
            desc="Community-driven carpooling for modern commuters." 
            icon={Car} 
            color="yellow" 
            appId="ridepe"
            delay={0.6}
          />

          <SpotlightCard 
            name="DocPe" 
            desc="Doctor appointment marketplace." 
            icon={Stethoscope} 
            color="red" 
            appId="docpe"
            delay={0.7}
          />

          <SpotlightCard 
            name="TicketPe" 
            desc="Entertainment booking - BMS alternative." 
            icon={Ticket} 
            color="teal" 
            appId="ticketpe"
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
};