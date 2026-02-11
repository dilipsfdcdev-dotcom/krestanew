import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function CompanyHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          priority
          sizes="100vw"
        />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a962]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#c9a962]/5 rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center px-4">
        {/* Logo */}
        <div className="hero-fade-1 mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-5 border-2 border-[#c9a962]/20 rounded-full" />
            <div className="w-28 h-28 md:w-32 md:h-32 relative">
              <Image src="/images/company/logo.webp" alt="Kresta Logo" fill className="object-contain drop-shadow-2xl" priority sizes="128px" />
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="hero-fade-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight font-[family-name:var(--font-heading)]">
            <span className="text-gold">KRESTA</span>
          </h1>
          <p className="text-[#c9a962] text-sm md:text-base tracking-[0.3em] uppercase font-medium">
            Infra & Developers Pvt. Ltd.
          </p>
        </div>

        {/* Line */}
        <div className="hero-line w-32 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto my-8" />

        {/* Tagline */}
        <p className="hero-fade-3 text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-4 font-[family-name:var(--font-heading)]">
          Crafting Luxury, Building Dreams
        </p>
        <p className="hero-fade-4 text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-12">
          Premium real estate solutions — from luxury residences and farmland estates to commercial spaces and integrated townships
        </p>

        {/* CTAs */}
        <div className="hero-fade-5 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="#projects" className="group px-8 py-4 bg-[#c9a962] text-white rounded-full font-medium hover:bg-[#8b7355] transition-all hover:shadow-lg hover:shadow-[#c9a962]/30">
            <span className="flex items-center gap-2">
              Explore Projects
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </Link>
          <Link href="#contact" className="px-8 py-4 border border-white/25 text-white rounded-full font-medium hover:bg-white/10 hover:border-[#c9a962]/50 transition-all">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-fade-5 absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <Link href="#about" className="flex flex-col items-center text-white/50 hover:text-[#c9a962] transition-colors group">
          <span className="text-xs tracking-widest uppercase mb-2">Discover More</span>
          <div className="bounce-gentle">
            <ChevronDown size={24} />
          </div>
        </Link>
      </div>

      {/* Corner decorations */}
      <div className="hidden lg:block hero-fade-5">
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#c9a962]/20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#c9a962]/20" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#c9a962]/20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#c9a962]/20" />
      </div>
    </section>
  );
}
