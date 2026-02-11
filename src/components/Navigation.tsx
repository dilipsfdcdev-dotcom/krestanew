'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isProject = pathname?.includes('/projects/');
  const links = isProject ? projectNavLinks : homeNavLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5 md:py-6'}`}>
        <div className={`absolute inset-0 transition-all duration-500 ${scrolled ? 'bg-[#0c0c0c]/90 backdrop-blur-xl border-b border-white/5' : ''}`} />
        <div className="container-luxury relative flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 md:w-10 md:h-10">
              <Image src="/images/company/logo.webp" alt="Kresta Logo" fill className="object-contain" priority sizes="40px" />
            </div>
            <div>
              <h1 className="text-base md:text-lg font-bold tracking-[0.15em] text-white group-hover:text-[#d4af37] transition-colors font-[family-name:var(--font-heading)]">KRESTA</h1>
              <p className="text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-white/40">Infra & Developers</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-white/60 hover:text-[#d4af37] transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-[#d4af37] after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919888932555" className="flex items-center gap-2 text-white/50 hover:text-[#d4af37] transition-colors text-sm">
              <Phone size={14} />
              <span className="text-[13px]">+91-9888932555</span>
            </a>
            <a
              href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20Kresta%20projects"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#d4af37] text-[#0c0c0c] rounded text-[13px] font-semibold tracking-wide hover:bg-[#f0d77b] transition-colors"
            >
              Schedule Visit
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-[#0c0c0c]/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
          <div className="relative h-full flex flex-col justify-center items-center px-8">
            <div className="flex items-center gap-3 mb-12">
              <div className="relative w-12 h-12">
                <Image src="/images/company/logo.webp" alt="Kresta" fill className="object-contain" sizes="48px" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-heading)] tracking-wider">KRESTA</h2>
                <p className="text-[10px] tracking-[0.2em] text-[#d4af37] uppercase">Infra & Developers</p>
              </div>
            </div>

            <div className="space-y-1 w-full max-w-xs">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-center text-xl font-light text-white/70 hover:text-[#d4af37] transition-colors font-[family-name:var(--font-heading)]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-4">
              <a
                href="https://wa.me/919888932555"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#d4af37] text-[#0c0c0c] rounded text-sm font-semibold tracking-wide hover:bg-[#f0d77b] transition-colors"
              >
                Schedule a Visit
              </a>
              <a href="tel:+919888932555" className="flex items-center gap-2 text-white/40 hover:text-[#d4af37] transition-colors text-sm">
                <Phone size={14} />
                <span>+91-9888932555</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
