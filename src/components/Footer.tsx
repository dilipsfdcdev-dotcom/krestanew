import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react'
import { company } from '@/data/company'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' },
  { href: '/projects/meadow-breeze', label: 'The Meadow Breeze' },
  { href: '/contact', label: 'Contact' },
  { href: '/schedule-visit', label: 'Schedule Visit' },
]

export function Footer() {
  return (
    <footer className="bg-[#1a0f06] text-white">
      <div className="container-luxury mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/company/logo.png"
                  alt="Kresta"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-white font-bold text-lg">KRESTA</span>
                <span className="block text-[#8D5B30] text-[10px] tracking-[0.2em] uppercase">
                  Infra & Developers
                </span>
              </div>
            </Link>
            <p className="text-[#8D5B30] text-sm italic mb-4">
              {company.tagline}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium real estate solutions — from luxury residences and farmland
              estates to commercial spaces and integrated townships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#8D5B30] font-semibold mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#8D5B30] text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-[#8D5B30] font-semibold mb-6 uppercase tracking-wider text-sm">
              Our Projects
            </h3>
            <div className="space-y-4">
              <Link
                href="/projects/meadow-breeze"
                className="block group"
              >
                <span className="text-white group-hover:text-[#8D5B30] transition-colors font-medium">
                  The Meadow Breeze
                </span>
                <span className="block text-white/50 text-xs mt-1">
                  Peepal Pahad, Choutuppal
                </span>
              </Link>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com/krestainfradevelopers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#8D5B30] hover:border-[#8D5B30] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#8D5B30] font-semibold mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#8D5B30] mt-0.5 shrink-0" />
                <a href={`tel:${company.phone}`} className="text-white/60 text-sm hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#8D5B30] mt-0.5 shrink-0" />
                <a href={`mailto:${company.email}`} className="text-white/60 text-sm hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8D5B30] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">{company.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#8D5B30] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">{company.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 Kresta Infra & Developers Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Made in Hyderabad.
          </p>
        </div>
      </div>
    </footer>
  )
}
