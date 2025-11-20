"use client";

import React, { useRef } from 'react';
import { ArrowUpRight, Globe, Smartphone, Zap, Play, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

export const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  // Mouse Parallax Logic
  const x = useMotionValue(0);
  const yMouse = useMotionValue(0);
  const rotateX = useSpring(useTransform(yMouse, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    yMouse.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    yMouse.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
  };

  return (
    <section ref={targetRef} className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-slate-50 dark:bg-[#020617] perspective-1000">
      
      {/* Dynamic Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-full blur-[100px]" 
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-blue-100 dark:border-white/10 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              ONDC Certified Technology Provider
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-slate-900 dark:text-white tracking-tight">
              The Merchant <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient" style={{ backgroundSize: '300% 300%' }}>Operating System</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg font-light">
              The definitive OS for Indian SMEs. We bundle payments, lending, and ONDC seller tools into a powerful B2B2C flywheel.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-xl shadow-slate-900/20 dark:shadow-white/10 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3">
                Join the Network
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 rounded-full bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={10} fill="currentColor" />
                </div>
                View Strategy
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-12 text-slate-500 dark:text-slate-500">
               {[
                 { icon: Globe, label: "ONDC Ready" },
                 { icon: ShieldCheck, label: "Bank Grade" },
                 { icon: Smartphone, label: "Mobile First" }
               ].map(({ icon: Icon, label }, idx) => (
                 <div key={idx} className="flex items-center gap-3 group cursor-default">
                   <Icon size={20} className="group-hover:text-blue-500 transition-colors" />
                   <span className="text-sm font-medium font-mono uppercase tracking-wider">{label}</span>
                 </div>
               ))}
            </motion.div>
          </motion.div>

          {/* 3D Interactive Visual */}
          <motion.div 
            style={{ opacity, scale, y }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative hidden lg:block h-[700px] w-full perspective-[2000px]"
          >
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="w-full h-full relative flex items-center justify-center"
            >
               {/* Abstract Backdrop Elements */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[600px] h-[600px] border border-dashed border-slate-200 dark:border-white/5 rounded-full translate-z-[-50px]"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[450px] h-[450px] border border-slate-200 dark:border-white/5 rounded-full translate-z-[-100px] opacity-50"
               />

               {/* Main Floating Card */}
               <div className="relative w-[360px] h-[640px] bg-white dark:bg-[#0B0F19] border-[6px] border-slate-900 dark:border-slate-700 rounded-[3rem] shadow-2xl shadow-blue-500/20 overflow-hidden transform-gpu translate-z-[50px]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 dark:bg-slate-700 rounded-b-2xl z-20"></div>
                  
                  {/* Screen Content */}
                  <div className="w-full h-full bg-slate-50 dark:bg-[#0F1623] flex flex-col relative overflow-hidden">
                    {/* Header */}
                    <div className="h-32 bg-gradient-to-br from-blue-600 to-cyan-500 relative p-6 pt-12 flex justify-between items-start text-white z-10">
                      <div>
                        <div className="text-xs opacity-80 mb-1">Setu.plus Dashboard</div>
                        <div className="font-bold text-xl">Priya Electronics</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                         <Zap size={18} />
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="px-6 -mt-8 relative z-20 grid grid-cols-2 gap-3">
                      <div className="bg-white dark:bg-[#1A202C] p-4 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-black/20">
                         <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">ONDC Orders</div>
                         <div className="text-lg font-bold text-slate-900 dark:text-white">1,240</div>
                         <div className="text-[10px] text-green-500 font-medium mt-1">Growing fast</div>
                      </div>
                      <div className="bg-white dark:bg-[#1A202C] p-4 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-black/20">
                         <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Credit Limit</div>
                         <div className="text-lg font-bold text-slate-900 dark:text-white">₹5.0L</div>
                         <div className="text-[10px] text-blue-500 font-medium mt-1">Pre-approved</div>
                      </div>
                    </div>

                    {/* Graph Area */}
                    <div className="p-6 flex-1">
                      <div className="h-40 w-full bg-gradient-to-b from-blue-500/10 to-transparent rounded-2xl border border-blue-500/10 relative overflow-hidden flex items-end px-2 pb-0 gap-2">
                         {[30, 50, 40, 70, 60, 80, 50, 90].map((h, i) => (
                           <motion.div 
                             key={i}
                             initial={{ height: 0 }}
                             animate={{ height: `${h}%` }}
                             transition={{ duration: 1, delay: i * 0.1 }}
                             className="flex-1 bg-blue-500/80 rounded-t-sm"
                           />
                         ))}
                      </div>
                      
                      {/* List Items */}
                      <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 text-xs font-bold">UPI</div>
                            <div className="flex-1">
                              <div className="text-sm font-bold text-slate-900 dark:text-white">Payment Received</div>
                              <div className="text-xs text-slate-500">Via PhonePe • 2m ago</div>
                            </div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white">+₹450</div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 text-xs font-bold">ONDC</div>
                            <div className="flex-1">
                              <div className="text-sm font-bold text-slate-900 dark:text-white">New Order</div>
                              <div className="text-xs text-slate-500">Bangalore • 15m ago</div>
                            </div>
                            <div className="text-sm font-bold text-blue-500">Pack</div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>

               {/* Floating Elements */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-[20%] -right-[10%] translate-z-[80px]"
               >
                 <div className="bg-white/90 dark:bg-[#1A202C]/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                     <Globe size={24} />
                   </div>
                   <div>
                     <div className="text-xs font-bold text-slate-400 uppercase">Active Sellers</div>
                     <div className="text-2xl font-bold text-slate-900 dark:text-white">2M+</div>
                   </div>
                 </div>
               </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};