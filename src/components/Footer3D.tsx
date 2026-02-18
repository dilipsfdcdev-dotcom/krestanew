'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const projectLinks = [
  { name: 'The Meadow Breeze', href: '/projects/meadow-breeze' },
  { name: 'Plot Sizes', href: '/projects/meadow-breeze#overview' },
  { name: 'Master Plan', href: '/projects/meadow-breeze#masterplan' },
  { name: 'Plant Forest', href: '/projects/meadow-breeze#forest' },
  { name: 'Site Visit', href: '#contact' },
];

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/krestadevelopers', icon: 'F' },
  { name: 'Instagram', href: 'https://instagram.com/krestainfradevelopers', icon: 'I' },
  { name: 'YouTube', href: 'https://youtube.com/@krestadevelopers', icon: 'Y' },
  { name: 'WhatsApp', href: 'https://wa.me/919888932555', icon: 'W' },
];

export default function Footer3D() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.getElementById(href.replace('#', ''));
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#050508]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a962]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#c9a962]/30">
                <Image
                  src="/images/company/logo.webp"
                  alt="Kresta"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <div className="text-base font-bold text-gradient-gold font-[family-name:var(--font-heading)]">KRESTA</div>
                <div className="text-[8px] tracking-[0.12em] text-white/30 uppercase">Infra & Developers</div>
              </div>
            </div>
            <p className="text-white/30 text-xs leading-relaxed mb-6">
              Crafting luxury, building dreams. Premium real estate solutions from luxury
              residences to farmland estates, commercial spaces, and integrated townships.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-lg glass text-white/40 text-xs font-bold hover:text-[#c9a962] hover:glass-gold transition-all"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/60 text-xs font-semibold uppercase tracking-[0.15em] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/30 text-sm hover:text-[#c9a962] transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className="text-white/30 text-sm hover:text-[#c9a962] transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white/60 text-xs font-semibold uppercase tracking-[0.15em] mb-5">Projects</h4>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/30 text-sm hover:text-[#c9a962] transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className="text-white/30 text-sm hover:text-[#c9a962] transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/60 text-xs font-semibold uppercase tracking-[0.15em] mb-5">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+919888932555" className="flex items-center gap-3 text-white/30 text-sm hover:text-[#c9a962] transition-colors">
                <Phone size={14} className="text-[#c9a962]/50 flex-shrink-0" />
                +91-9888932555
              </a>
              <a href="mailto:info@kresta.in" className="flex items-center gap-3 text-white/30 text-sm hover:text-[#c9a962] transition-colors">
                <Mail size={14} className="text-[#c9a962]/50 flex-shrink-0" />
                info@kresta.in
              </a>
              <div className="flex items-start gap-3 text-white/30 text-sm">
                <MapPin size={14} className="text-[#c9a962]/50 flex-shrink-0 mt-0.5" />
                <span>94, HIG, TV Colony, Vanasthalipuram, Hyderabad - 500070</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Kresta Infra & Developers Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-white/15 text-xs">
            Made with &hearts; in Hyderabad
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 w-10 h-10 flex items-center justify-center bg-[#c9a962]/20 border border-[#c9a962]/30 rounded-full text-[#c9a962] hover:bg-[#c9a962]/30 transition-all backdrop-blur-sm"
      >
        <ArrowUp size={16} />
      </motion.button>

      {/* WhatsApp float */}
      <a
        href="https://wa.me/919888932555"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 w-12 h-12 flex items-center justify-center bg-[#25D366] rounded-full text-white shadow-lg whatsapp-pulse hover:bg-[#128C7E] transition-colors"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}
