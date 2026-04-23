'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowUp, Phone } from 'lucide-react';

const columns = [
  {
    title: 'Navigate',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Vision', href: '/#vision' },
      { name: 'Projects', href: '/#projects' },
      { name: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Portfolio',
    links: [
      { name: 'The Meadow Breeze', href: '/projects/meadow-breeze' },
      { name: 'Masterplan', href: '/projects/meadow-breeze#masterplan' },
      { name: 'Forest', href: '/projects/meadow-breeze#forest' },
      { name: 'Film', href: '/projects/meadow-breeze#videos' },
    ],
  },
  {
    title: 'Social',
    links: [
      { name: 'Instagram', href: 'https://instagram.com/krestainfradevelopers' },
      { name: 'WhatsApp', href: 'https://wa.me/919888932555' },
      { name: 'Facebook', href: 'https://facebook.com' },
      { name: 'YouTube', href: 'https://youtube.com' },
    ],
  },
];

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 400);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <footer className="relative bg-[#050505] text-white border-t border-white/10">
      <div className="container-edge py-20 md:py-28">
        {/* Giant wordmark */}
        <div className="mb-20">
          <p className="text-eyebrow mb-6">Kresta Infra &amp; Developers</p>
          <h3 className="text-display text-gradient-fade leading-none">
            Crafting luxury,
            <br />
            <span className="italic text-gradient-gold">building dreams.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11">
                <Image
                  src="/images/company/logo.webp"
                  alt="Kresta"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="font-semibold tracking-[0.12em]">KRESTA</div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-white/50">
                  Infra &amp; Developers
                </div>
              </div>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-sm">
              Premium real estate solutions — from luxury residences and
              farmland estates to commercial spaces and integrated townships.
            </p>
            <a
              href="tel:+919888932555"
              className="inline-flex items-center gap-2 text-white/75 hover:text-[#c9a962] transition-colors text-sm"
            >
              <Phone size={14} /> +91 98889 32555
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2 lg:col-span-2">
              <div className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-5">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-white/75 hover:text-[#c9a962] transition-colors text-sm link-underline"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/45">
          <p>© {new Date().getFullYear()} Kresta Infra &amp; Developers Pvt. Ltd.</p>
          <p className="tracking-[0.2em] uppercase">Hyderabad · Telangana · India</p>
        </div>
      </div>

      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 w-11 h-11 rounded-full surface-glass flex items-center justify-center text-white hover:text-[#c9a962] hover:border-[#c9a962]/50 transition-colors z-40"
        >
          <ArrowUp size={16} />
        </button>
      )}

      <a
        href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20Kresta%20projects."
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-lg hover:bg-[#128c7e] transition-colors z-40"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
}
