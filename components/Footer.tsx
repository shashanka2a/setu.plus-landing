"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0B0F19] border-t border-slate-200 dark:border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#4F46E5",stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:"#06B6D4",stopOpacity:1}} />
                    </linearGradient>
                  </defs>
                  <path d="M4 20 L8 16 L12 18 L16 14 L20 18 L24 16 L28 20" 
                        stroke="url(#footerGradient)" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        fill="none"/>
                  <line x1="8" y1="16" x2="8" y2="24" 
                        stroke="url(#footerGradient)" 
                        strokeWidth="2" 
                        strokeLinecap="round"/>
                  <line x1="16" y1="14" x2="16" y2="24" 
                        stroke="url(#footerGradient)" 
                        strokeWidth="2" 
                        strokeLinecap="round"/>
                  <line x1="24" y1="16" x2="24" y2="24" 
                        stroke="url(#footerGradient)" 
                        strokeWidth="2" 
                        strokeLinecap="round"/>
                  <circle cx="16" cy="10" r="4" 
                          fill="url(#footerGradient)"/>
                  <line x1="16" y1="8" x2="16" y2="12" 
                        stroke="white" 
                        strokeWidth="1.5" 
                        strokeLinecap="round"/>
                  <line x1="14" y1="10" x2="18" y2="10" 
                        stroke="white" 
                        strokeWidth="1.5" 
                        strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Setu.plus
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              The Operating System for Indian SMEs. Empowering millions of merchants to join the ONDC revolution with seamless payments, lending, and commerce tools.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              {['ONDC Seller Suite', 'Unified Payments', 'Embedded Finance', 'Business Analytics', 'Pricing'].map(item => (
                <li key={item}><a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              {['Our Mission', 'Leadership', 'Careers', 'Press', 'Contact'].map(item => (
                <li key={item}><a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Join our newsletter for the latest on ONDC and digital commerce trends.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 dark:focus:border-cyan-500 text-slate-900 dark:text-white transition-colors"
              />
              <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 dark:text-slate-600 text-xs uppercase tracking-widest">
            © 2025 Setu.plus Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs font-medium text-slate-500 dark:text-slate-500">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};