'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'The Meadow Breeze', href: '#project' },
  { name: 'Forest', href: '#forest' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#1a4d2e] text-white py-2">
        <div className="container-luxury flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919888932555" className="flex items-center gap-2 hover:text-[#c9a962] transition-colors">
              <Phone size={14} />
              <span>+91-9888932555</span>
            </a>
            <a href="https://maps.google.com" target="_blank" className="flex items-center gap-2 hover:text-[#c9a962] transition-colors">
              <MapPin size={14} />
              <span>Hyderabad, Telangana</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#c9a962]">Crafting Luxury, Building Dreams</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
        style={{ top: isScrolled ? 0 : undefined }}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isScrolled ? 'bg-[#1a4d2e]' : 'bg-white/10 backdrop-blur-sm border border-white/20'
                }`}>
                  <span className={`text-xl font-bold ${isScrolled ? 'text-[#c9a962]' : 'text-white'}`}>K</span>
                </div>
              </div>
              <div className={`${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
                <h1 className="text-xl font-bold tracking-wide">KRESTA</h1>
                <p className="text-[10px] tracking-[0.2em] uppercase opacity-80">Infra & Developers</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide underline-animation ${
                    isScrolled
                      ? 'text-[#1a1a1a] hover:text-[#c9a962]'
                      : 'text-white hover:text-[#c9a962]'
                  } transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20The%20Meadow%20Breeze%20project"
                target="_blank"
                className="btn-luxury px-6 py-3 bg-[#c9a962] text-white rounded-full text-sm font-medium tracking-wide hover:bg-[#8b7355] transition-all"
              >
                Schedule a Visit
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl">
              <div className="p-6 pt-24">
                <div className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 text-lg font-medium text-[#1a1a1a] hover:text-[#c9a962] border-b border-gray-100 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8"
                >
                  <a
                    href="https://wa.me/919888932555"
                    target="_blank"
                    className="block w-full py-4 bg-[#1a4d2e] text-white text-center rounded-full font-medium hover:bg-[#2d6a4f] transition-colors"
                  >
                    Schedule a Visit
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-8 pt-8 border-t border-gray-100"
                >
                  <a href="tel:+919888932555" className="flex items-center gap-3 text-[#1a1a1a] mb-4">
                    <Phone size={18} className="text-[#c9a962]" />
                    <span>+91-9888932555</span>
                  </a>
                  <p className="text-sm text-gray-500">
                    94, HIG, TV Colony, Vanasthalipuram, Hyderabad - 500070
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
