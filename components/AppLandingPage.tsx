"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, ShoppingBag, Truck, Wrench, Camera, Car, Stethoscope, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';
import { AppConfig, IconName } from '@/data/apps';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const iconMap: Record<IconName, React.ComponentType<any>> = {
  ShoppingBag,
  Truck,
  Wrench,
  Camera,
  Car,
  Stethoscope,
  Ticket,
};

interface AppLandingPageProps {
  app: AppConfig;
}

const colorMap: Record<string, { 
  bg: string; 
  text: string; 
  border: string;
  solid: string;
  hover: string;
}> = {
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/10',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-500/30',
    solid: '#9333EA',
    hover: 'hover:bg-purple-600',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-900/10',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-500/30',
    solid: '#EA580C',
    hover: 'hover:bg-orange-600',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/10',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-500/30',
    solid: '#16A34A',
    hover: 'hover:bg-green-600',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/10',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-500/30',
    solid: '#2563EB',
    hover: 'hover:bg-blue-600',
  },
  pink: {
    bg: 'bg-pink-50 dark:bg-pink-900/10',
    text: 'text-pink-600 dark:text-pink-400',
    border: 'border-pink-200 dark:border-pink-500/30',
    solid: '#DB2777',
    hover: 'hover:bg-pink-600',
  },
  yellow: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/10',
    text: 'text-yellow-600 dark:text-yellow-400',
    border: 'border-yellow-200 dark:border-yellow-500/30',
    solid: '#CA8A04',
    hover: 'hover:bg-yellow-600',
  },
  red: {
    bg: 'bg-red-50 dark:bg-red-900/10',
    text: 'text-red-600 dark:text-red-400',
    border: 'border-red-200 dark:border-red-500/30',
    solid: '#DC2626',
    hover: 'hover:bg-red-600',
  },
  teal: {
    bg: 'bg-teal-50 dark:bg-teal-900/10',
    text: 'text-teal-600 dark:text-teal-400',
    border: 'border-teal-200 dark:border-teal-500/30',
    solid: '#0D9488',
    hover: 'hover:bg-teal-600',
  },
};

export const AppLandingPage: React.FC<AppLandingPageProps> = ({ app }) => {
  const colors = colorMap[app.color.primary] || colorMap.blue;
  const Icon = iconMap[app.icon] || ShoppingBag;

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen text-slate-900 dark:text-white font-sans transition-colors duration-500 relative overflow-x-hidden">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-[9999] bg-noise mix-blend-overlay"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Back Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span className="text-sm font-medium">Back to Setu.plus</span>
                </Link>
              </motion.div>

              {/* App Icon & Tagline - Centered */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-8 flex flex-col items-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${colors.bg} ${colors.border} border-2 mb-4`}>
                  <Icon size={40} className={colors.text} />
                </div>
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${colors.bg} ${colors.border} border text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                  {app.tagline}
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 text-slate-900 dark:text-white tracking-tight"
              >
                {app.name}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto"
              >
                {app.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <button className="group px-8 py-4 rounded-full text-white font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3" style={{ backgroundColor: colors.solid }}>
                  {app.cta.primary}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group px-8 py-4 rounded-full bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3">
                  {app.cta.secondary}
                </button>
              </motion.div>

              {/* Stats */}
              {app.stats && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-16 pt-8 border-t border-slate-200/60 dark:border-white/5 flex flex-wrap justify-center gap-12"
                >
                  {app.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 bg-white dark:bg-[#0B0F19] relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Why Choose <span className={colors.text}>{app.name}</span>?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Everything you need to succeed, all in one place.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {app.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-slate-50 dark:bg-[#020617] relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  Get Started Today
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Join thousands of users already using {app.name}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {app.benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/10"
                  >
                    <div className={`w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                      <Check size={20} className={colors.text} />
                    </div>
                    <span className="text-lg font-medium text-slate-900 dark:text-white">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-slate-900 dark:bg-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-300 mb-10">
                Join the {app.name} community today and experience the future of digital commerce.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="group px-8 py-4 rounded-full text-white font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3" style={{ backgroundColor: colors.solid }}>
                  {app.cta.primary}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/"
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 font-semibold hover:bg-white/20 transition-all"
                >
                  Learn More About Setu.plus
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

