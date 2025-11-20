"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${isScrolled ? 'pt-4' : 'pt-6'}`}
      >
        <div className={`
          relative flex items-center justify-between px-6 transition-all duration-500
          ${isScrolled 
            ? 'w-[95%] md:w-[85%] lg:w-[70%] bg-white/70 dark:bg-[#0B0F19]/70 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 shadow-lg shadow-slate-200/20 dark:shadow-black/20 rounded-2xl py-3' 
            : 'w-full max-w-7xl bg-transparent py-4 border-transparent'}
        `}>
          
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-bold text-white text-sm font-mono">S+</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              Setu.plus
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {['Ecosystem', 'Vision', 'Developers', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100/50 dark:hover:bg-white/5 relative overflow-hidden group"
              >
                <span className="relative z-10">{item}</span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle Theme"
            >
              {mounted && (
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div key="sun" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 90 }}>
                      <Sun size={18} />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ scale: 0, rotate: 90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: -90 }}>
                      <Moon size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </button>

            <button className="bg-slate-900 text-white dark:bg-white dark:text-brand-dark px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-slate-800 dark:hover:bg-cyan-50 transition-all flex items-center gap-2 group hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-cyan-500/20 active:scale-95">
              <span>Get Started</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            {mounted && (
              <button onClick={toggleTheme} className="text-slate-600 dark:text-slate-300">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button className="text-slate-900 dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-brand-dark pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Ecosystem', 'Vision', 'Developers', 'About'].map((item, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-3xl font-bold text-slate-900 dark:text-white" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <div className="h-px bg-slate-200 dark:bg-white/10 my-4"></div>
              <button className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-lg w-full shadow-xl shadow-blue-600/20">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};