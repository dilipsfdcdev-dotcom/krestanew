'use client';

import { useState, useEffect } from 'react';
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
      {!isProject && (
        <div className="hidden lg:block bg-[#1a1a1a] text-white py-2 relative z-50">
          <div className="container-luxury flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+919888932555" className="flex items-center gap-2 hover:text-[#c9a962] transition-colors">
                <Phone size={14} />
                <span>+91-9888932555</span>
              </a>
              <a href="https://maps.app.goo.gl/4HvLznBYEHfcQcHP7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#c9a962] transition-colors">
                <MapPin size={14} />
                <span>Hyderabad, Telangana</span>
              </a>
            </div>
            <span className="text-[#c9a962] font-medium">Crafting Luxury, Building Dreams</span>
          </div>
        </div>
      )}

      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-lg py-3' : 'bg-transparent py-4 md:py-5'}`} style={{ top: 0 }}>
        <div className="container-luxury flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-11 md:h-11">
              <Image src="/images/company/logo.webp" alt="Kresta Logo" fill className="object-contain" priority sizes="44px" />
            </div>
            <div className={scrolled ? 'text-[#1a1a1a]' : 'text-white'}>
              <h1 className="text-lg md:text-xl font-bold tracking-wide font-[family-name:var(--font-heading)] group-hover:text-[#c9a962] transition-colors">KRESTA</h1>
              <p className="text-[9px] md:text-[10px] tracking-[0.15em] uppercase opacity-80">Infra & Developers</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className={`text-sm font-medium tracking-wide relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#c9a962] after:transition-all hover:after:w-full ${scrolled ? 'text-[#1a1a1a] hover:text-[#c9a962]' : 'text-white hover:text-[#c9a962]'} transition-colors`}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20Kresta%20projects" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#c9a962] text-white rounded-full text-sm font-medium tracking-wide hover:bg-[#8b7355] transition-colors shadow-lg shadow-[#c9a962]/20">
              Schedule a Visit
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-[#1a1a1a] hover:bg-gray-100' : 'text-white hover:bg-white/10'}`} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl">
            <div className="p-6 pt-20">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                <div className="relative w-12 h-12">
                  <Image src="/images/company/logo.webp" alt="Kresta" fill className="object-contain" sizes="48px" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#1a1a1a] font-[family-name:var(--font-heading)]">KRESTA</h2>
                  <p className="text-[10px] tracking-[0.15em] text-gray-500 uppercase">Infra & Developers</p>
                </div>
              </div>
              <div className="space-y-1">
                {links.map((link) => (
                  <Link key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 px-4 text-base font-medium text-[#1a1a1a] hover:text-[#c9a962] hover:bg-[#faf8f5] rounded-lg transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
              <a href="https://wa.me/919888932555" target="_blank" rel="noopener noreferrer" className="block w-full mt-8 py-4 bg-[#1a1a1a] text-white text-center rounded-xl font-medium hover:bg-[#333] transition-colors">
                Schedule a Visit
              </a>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a href="tel:+919888932555" className="flex items-center gap-3 text-[#1a1a1a] mb-4 hover:text-[#c9a962] transition-colors">
                  <Phone size={18} className="text-[#c9a962]" />
                  <span>+91-9888932555</span>
                </a>
                <p className="text-sm text-gray-500">94, HIG, TV Colony, Vanasthalipuram, Hyderabad - 500070</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
