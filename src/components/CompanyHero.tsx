import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function CompanyHero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#0c0c0c]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000"
          alt="Luxury farmland landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#0c0c0c]/60 to-[#0c0c0c]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/80 to-transparent" />
      </div>

      {/* Decorative vertical line */}
      <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-luxury pb-24 md:pb-32 pt-40">
        <div className="max-w-3xl">
          <div className="hero-fade-1 mb-8">
            <span className="label-gold">Est. 2024</span>
          </div>

          <div className="hero-fade-1 mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 relative">
              <Image src="/images/company/logo.webp" alt="Kresta Logo" fill className="object-contain" priority sizes="80px" />
            </div>
          </div>

          <h1 className="hero-fade-2 heading-display text-white mb-6 font-[family-name:var(--font-heading)]">
            Crafting Luxury,{' '}
            <span className="text-gold-gradient">Building Dreams</span>
          </h1>

          <div className="hero-line w-20 h-px bg-[#d4af37] mb-8" />

          <p className="hero-fade-3 text-lg md:text-xl text-white/50 max-w-xl leading-relaxed mb-12 font-light">
            Premium real estate solutions — from luxury residences and farmland estates to commercial spaces and integrated townships
          </p>

          <div className="hero-fade-4 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#d4af37] text-[#0c0c0c] font-semibold text-sm tracking-wide hover:bg-[#f0d77b] transition-all"
            >
              Explore Projects
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/15 text-white font-medium text-sm tracking-wide hover:border-[#d4af37]/50 hover:text-[#d4af37] transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Side stats */}
        <div className="hero-fade-5 hidden lg:flex absolute right-8 bottom-32 flex-col items-end gap-8">
          {[
            { num: '100+', label: 'Acres' },
            { num: '124', label: 'Premium Plots' },
            { num: '900', label: 'Plants/Plot' },
          ].map((s) => (
            <div key={s.label} className="text-right">
              <p className="text-3xl font-bold text-[#d4af37] font-[family-name:var(--font-heading)]">{s.num}</p>
              <p className="text-xs text-white/30 tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-fade-5 absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <Link href="#about" className="flex flex-col items-center text-white/30 hover:text-[#d4af37] transition-colors group">
          <span className="text-[10px] tracking-[0.3em] uppercase mb-3">Scroll</span>
          <div className="float-gentle">
            <ChevronDown size={18} />
          </div>
        </Link>
      </div>
    </section>
  );
}
