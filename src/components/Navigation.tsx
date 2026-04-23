'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const homeNavLinks = [
  { name: 'Vision', href: '#vision' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const projectNavLinks = [
  { name: 'Overview', href: '#overview' },
  { name: 'Masterplan', href: '#masterplan' },
  { name: 'Forest', href: '#forest' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Film', href: '#videos' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname?.includes('/projects/');
  const navLinks = isProjectPage ? projectNavLinks : homeNavLinks;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container-edge">
          <div
            className={`flex items-center justify-between rounded-full transition-all duration-500 ${
              isScrolled
                ? 'surface-glass px-4 md:px-6 py-2.5'
                : 'bg-transparent px-0 py-0'
            }`}
          >
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-9 h-9">
                <Image
                  src="/images/company/logo.webp"
                  alt="Kresta"
                  fill
                  sizes="36px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-[0.95rem] font-semibold tracking-[0.12em]">KRESTA</span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-white/50 mt-1">
                  Infra & Developers
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[13px] tracking-[0.18em] uppercase text-white/70 hover:text-[#c9a962] transition-colors link-underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919888932555"
                className="flex items-center gap-2 text-[13px] text-white/70 hover:text-white transition-colors"
              >
                <Phone size={14} />
                <span>+91 98889 32555</span>
              </a>
              <a
                href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20Kresta%20projects"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#c9a962] text-black text-[13px] font-medium tracking-wide hover:bg-[#e8d5a3] transition-colors"
              >
                Book a Visit
              </a>
            </div>

            <button
              aria-label="Menu"
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden w-10 h-10 rounded-full surface-glass flex items-center justify-center text-white"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#050505]/95 backdrop-blur-xl"
          >
            <div className="h-full flex flex-col justify-center px-8">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-serif text-white hover:text-[#c9a962] transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-16 pt-8 border-t border-white/10 space-y-4">
                <a
                  href="tel:+919888932555"
                  className="flex items-center gap-3 text-white/70"
                >
                  <Phone size={16} className="text-[#c9a962]" />
                  <span>+91 98889 32555</span>
                </a>
                <a
                  href="https://wa.me/919888932555"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-[#c9a962] text-black font-medium"
                >
                  Book a Visit
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
