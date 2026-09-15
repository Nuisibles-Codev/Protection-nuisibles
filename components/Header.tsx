"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Typage des liens de navigation
interface NavLink {
  href: string;
  label: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { href: '/', label: 'Accueil' },
    { href: '/punaises', label: 'Punaises de lit' },
    { href: '/desinsectisation', label: 'Désinsectisation' },
    { href: '/deratisation', label: 'Dératisation' },
    { href: '/frelons', label: 'Guêpes / Frelons' },
    { href: '/pictures', label: 'Photos' },
    { href: '/savoir-faire', label: 'Qui sommes-nous ?' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image
            src="/logo.png"
            alt="Logo Protection Nuisibles"
            title="Accueil - Protection Nuisibles"
            width={60}
            height={60}
            priority
            className="w-11 h-11 sm:w-14 sm:h-14 object-contain group-hover:scale-105 transition-transform duration-200"
          />
          {/* Masqué sur les très petits écrans si le texte prend trop de place, s'affiche dès 350px */}
          <div className="hidden xs:flex flex-col">
            <span className="text-sm font-black text-brand-blue tracking-tight uppercase leading-none">Protection</span>
            <span className="text-xs font-bold text-brand-red tracking-widest uppercase leading-none mt-0.5">Nuisibles</span>
          </div>
        </Link>

        {/* NAVIGATION DESKTOP (Masquée sur mobile/tablette) */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-semibold text-slate-700 hover:text-brand-blue px-3 py-2 rounded-lg hover:bg-slate-50 transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ZONE CTA URGENCE + HAMBURGER */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* BOUTON APPEL URGENCE RESPONSIVE */}
          <a
            href="tel:+33757516414"
            className="
              bg-brand-red text-white transition-all duration-200 uppercase tracking-wider animate-pulse shadow-md hover:bg-red-700 font-black shrink-0
              /* VERSION MOBILE : Cercle parfait */
              w-11 h-11 rounded-full flex items-center justify-center text-lg
              /* VERSION TABLETTE & PC (sm) : Devient le gros bouton rectangulaire d'origine */
              sm:w-auto sm:h-auto sm:rounded-full sm:text-xs md:text-sm sm:px-5 sm:py-3
            "
          >
            <span>📞</span>
            {/* Le texte se cache sur mobile et se déploie uniquement à partir du breakpoint sm */}
            <span className="hidden sm:inline sm:ml-2 whitespace-nowrap">
              Urgence : 07 57 51 64 14
            </span>
          </a>

          {/* BOUTON HAMBURGER MOBILE (Masqué sur PC) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-colors shrink-0"
            aria-label="Menu de navigation"
            aria-expanded={isMenuOpen}
          >
            <div className="space-y-1.5 w-5">
              <span className={`block h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>

        </div>
      </div>

      {/* RIDEAU MENU MOBILE PANEL */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl lg:hidden overflow-hidden"
          >
            <ul className="py-4 px-4 space-y-1">
              {navLinks.map((link: NavLink) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left font-bold text-slate-800 hover:text-brand-blue py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}