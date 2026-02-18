'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation3D() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Top bar - Desktop */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="hidden md:flex items-center justify-between px-8 py-2 bg-black/30 backdrop-blur-sm border-b border-white/5 text-xs text-white/50">
          <div className="flex items-center gap-6">
            <a href="tel:+919888932555" className="flex items-center gap-1.5 hover:text-[#c9a962] transition-colors">
              <Phone size={10} />
              <span>+91-9888932555</span>
            </a>
            <a
              href="https://maps.app.goo.gl/4HvLznBYEHfcQcHP7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#c9a962] transition-colors"
            >
              <MapPin size={10} />
              <span>Hyderabad, Telangana</span>
            </a>
          </div>
          <span className="text-[#c9a962]/60 tracking-[0.2em] text-[10px] uppercase">Crafting Luxury, Building Dreams</span>
        </div>
      </div>

      {/* Main Nav */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'top-0 bg-black/60 backdrop-blur-xl border-b border-white/5'
            : 'top-8 md:top-10 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-[#c9a962]/30 group-hover:border-[#c9a962]/60 transition-all duration-500">
                <Image
                  src="/images/company/logo.webp"
                  alt="Kresta"
                  fill
                  className="object-cover"
                  sizes="48px"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-gradient-gold font-[family-name:var(--font-heading)]">KRESTA</div>
                <div className="text-[9px] tracking-[0.15em] text-white/40 uppercase">Infra & Developers</div>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 text-sm tracking-wide transition-all duration-300 rounded-full ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[#c9a962]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-[#c9a962]/10 border border-[#c9a962]/20 rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20scheduling%20a%20site%20visit%20for%20The%20Meadow%20Breeze%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#c9a962] text-black text-sm font-semibold rounded-full btn-3d hover:bg-[#e8d5a3] transition-colors"
              >
                Schedule a Visit
                <ChevronRight size={14} />
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 text-white/70 hover:text-[#c9a962] transition-colors"
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[60] bg-[#0a0a0f]/98 backdrop-blur-xl"
          >
            <div className="flex flex-col h-full pt-20 px-8">
              <button
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-5 right-5 p-2 text-white/70"
              >
                <X size={28} />
              </button>

              <div className="flex-1 flex flex-col justify-center gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-3xl font-[family-name:var(--font-heading)] text-white/80 hover:text-[#c9a962] py-4 border-b border-white/5 transition-colors"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>

              <div className="pb-8 space-y-4">
                <a
                  href="https://wa.me/919888932555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#c9a962] text-black font-semibold rounded-xl"
                >
                  Schedule a Visit
                  <ChevronRight size={16} />
                </a>
                <div className="flex items-center justify-center gap-4 text-xs text-white/30">
                  <a href="tel:+919888932555" className="hover:text-[#c9a962] transition-colors">
                    +91-9888932555
                  </a>
                  <span>|</span>
                  <a href="mailto:info@kresta.in" className="hover:text-[#c9a962] transition-colors">
                    info@kresta.in
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
