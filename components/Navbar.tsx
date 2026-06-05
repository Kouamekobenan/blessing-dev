'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import { useTheme } from '@/components/ThemeProvider';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleBtn = (
    <button
      onClick={toggle}
      className="p-2 text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all duration-200"
      aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-background/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_0_rgba(148,163,184,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-1 group">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-pink-500 group-hover:text-pink-400 transition-colors duration-200">B</span>
              <span className="text-slate-900 dark:text-white">lessingDev</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop: toggle + CTA */}
          <div className="hidden md:flex items-center gap-2">
            {toggleBtn}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 bg-pink-500 hover:bg-pink-400 text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
            >
              Démarrer un projet
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            {toggleBtn}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Ouvrir le menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200/60 dark:border-slate-800/60 bg-white/98 dark:bg-background/98 backdrop-blur-sm py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-3 pb-1">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-3 bg-pink-500 hover:bg-pink-400 text-white text-sm font-semibold rounded-full transition-all duration-200"
              >
                Démarrer un projet
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
