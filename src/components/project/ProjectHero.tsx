import Image from 'next/image';
import { ChevronDown, MapPin, TreePine, Mountain, Shield } from 'lucide-react';

const highlights = [
  { icon: TreePine, text: '600-900 Plants/Plot' },
  { icon: Mountain, text: '360° Mountain Views' },
  { icon: Shield, text: 'Gated Community' },
];

export default function ProjectHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000"
          alt=""
          fill
          className="object-cover opacity-[0.12]"
          priority
          sizes="100vw"
        />
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#c9a962]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#c9a962]/8 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center px-4">
        <div className="hero-fade-1">
          <p className="text-white/50 text-sm md:text-base tracking-[0.15em] uppercase mb-3">
            A Distinguished 100-Acre Farmland Estate
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 font-[family-name:var(--font-heading)]">
            The Meadow Breeze
          </h1>
          <p className="text-[#c9a962] text-base md:text-lg tracking-[0.2em] uppercase font-medium">by Kresta</p>
        </div>

        <div className="hero-line w-32 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto my-8" />

        <p className="hero-fade-2 text-xl md:text-2xl lg:text-3xl text-white/90 font-light italic font-[family-name:var(--font-heading)] mb-4">
          &ldquo;Where the hills whisper peace and the breeze carries serenity&rdquo;
        </p>

        <div className="hero-fade-3 flex items-center justify-center gap-2 text-white/60 mb-10">
          <MapPin className="w-5 h-5 text-[#c9a962]" />
          <span>Peepal Pahad, Choutuppal, Yadadri Bhuvanagiri District</span>
        </div>

        <div className="hero-fade-4 flex flex-wrap justify-center gap-3 mb-12">
          {highlights.map((item) => (
            <div key={item.text} className="flex items-center gap-2 px-5 py-3 bg-white/8 rounded-full border border-white/15 hover:bg-white/15 hover:border-[#c9a962]/40 transition-all">
              <item.icon className="w-5 h-5 text-[#c9a962]" />
              <span className="text-white font-medium text-sm">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="hero-fade-5 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#overview" className="px-8 py-4 bg-[#c9a962] text-white rounded-full font-medium hover:bg-[#8b7355] transition-all hover:shadow-lg hover:shadow-[#c9a962]/30">
            Explore Project
          </a>
          <a href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20The%20Meadow%20Breeze%20project.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/25 text-white rounded-full font-medium hover:bg-white/10 hover:border-[#c9a962]/50 transition-all">
            Book Site Visit
          </a>
        </div>
      </div>

      {/* Scroll */}
      <div className="hero-fade-5 absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#overview" className="flex flex-col items-center text-white/50 hover:text-[#c9a962] transition-colors">
          <span className="text-xs tracking-widest uppercase mb-2">Scroll to Explore</span>
          <div className="bounce-gentle"><ChevronDown size={24} /></div>
        </a>
      </div>
    </section>
  );
}
