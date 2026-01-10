'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const homeNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const projectNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'Overview', href: '#overview' },
  { name: 'Master Plan', href: '#masterplan' },
  { name: 'Forest', href: '#forest' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Videos', href: '#videos' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isProjectPage = pathname?.includes('/projects/');
  const navLinks = isProjectPage ? projectNavLinks : homeNavLinks;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Only on home page */}
      {!isProjectPage && (
        <div className="hidden lg:block bg-[#1a1a1a] text-white py-2 relative z-50">
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
      )}

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-4 md:py-6'
        }`}
        style={{ top: isScrolled ? 0 : undefined }}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/images/company/logo.png"
                  alt="Kresta Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className={`hidden sm:block ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
                <h1 className="text-lg md:text-xl font-bold tracking-wide group-hover:text-[#c9a962] transition-colors">KRESTA</h1>
                <p className="text-[9px] md:text-[10px] tracking-[0.15em] uppercase opacity-80">Infra & Developers</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
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
                href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20Kresta%20projects"
                target="_blank"
                className="px-5 xl:px-6 py-2.5 xl:py-3 bg-[#c9a962] text-white rounded-full text-sm font-medium tracking-wide hover:bg-[#8b7355] transition-all shadow-lg shadow-[#c9a962]/20"
              >
                Schedule a Visit
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-[#1a1a1a] hover:bg-gray-100' : 'text-white hover:bg-white/10'} transition-colors`}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl"
            >
              <div className="p-6 pt-20">
                {/* Logo in Mobile Menu */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/images/company/logo.png"
                      alt="Kresta Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#1a1a1a]">KRESTA</h2>
                    <p className="text-[10px] tracking-[0.15em] text-gray-500 uppercase">Infra & Developers</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 px-4 text-base font-medium text-[#1a1a1a] hover:text-[#c9a962] hover:bg-[#faf8f5] rounded-lg transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <a
                    href="https://wa.me/919888932555"
                    target="_blank"
                    className="block w-full py-4 bg-[#1a1a1a] text-white text-center rounded-xl font-medium hover:bg-[#333] transition-colors"
                  >
                    Schedule a Visit
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-6 border-t border-gray-100"
                >
                  <a href="tel:+919888932555" className="flex items-center gap-3 text-[#1a1a1a] mb-4 hover:text-[#c9a962] transition-colors">
                    <Phone size={18} className="text-[#c9a962]" />
                    <span>+91-9888932555</span>
                  </a>
                  <p className="text-sm text-gray-500">
                    94, HIG, TV Colony, Vanasthalipuram, Hyderabad - 500070
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
