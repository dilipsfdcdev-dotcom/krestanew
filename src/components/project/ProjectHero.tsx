import Image from 'next/image';
import { ChevronDown, MapPin, TreePine, Mountain, Shield } from 'lucide-react';

const highlights = [
  { icon: TreePine, text: '600-900 Plants/Plot' },
  { icon: Mountain, text: '360° Mountain Views' },
  { icon: Shield, text: 'Gated Community' },
];

export default function ProjectHero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#080808] section-glow">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000"
          alt="The Meadow Breeze"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/50 to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 to-transparent" />
      </div>

      <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent" />

      <div className="relative z-10 container-luxury pb-24 md:pb-32 pt-40">
        <div className="max-w-3xl">
          <div className="hero-fade-1 mb-6">
            <span className="label-gold font-[family-name:var(--font-body)]">A Distinguished 100-Acre Farmland Estate</span>
          </div>

          <h1 className="hero-fade-2 heading-display text-white mb-3 font-[family-name:var(--font-heading)]">
            The Meadow Breeze
          </h1>
          <p className="hero-fade-2 text-[#c9a84c] text-sm tracking-[0.25em] uppercase font-medium mb-6">by Kresta</p>

          <div className="hero-line w-20 h-px bg-[#c9a84c] mb-8" />

          <p className="hero-fade-3 text-xl md:text-2xl text-white/60 font-light italic font-[family-name:var(--font-heading)] mb-4">
            &ldquo;Where the hills whisper peace and the breeze carries serenity&rdquo;
          </p>

          <div className="hero-fade-3 flex items-center gap-2 text-white/40 mb-10">
            <MapPin className="w-4 h-4 text-[#c9a84c]" />
            <span className="text-sm">Peepal Pahad, Choutuppal, Yadadri Bhuvanagiri District</span>
          </div>

          <div className="hero-fade-4 flex flex-wrap gap-3 mb-12">
            {highlights.map((item) => (
              <div key={item.text} className="flex items-center gap-2 px-4 py-2.5 glass rounded-2xl hover:border-[#c9a84c]/20 transition-all glow-hover">
                <item.icon className="w-4 h-4 text-[#c9a84c]" />
                <span className="text-white/80 font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="hero-fade-5 flex flex-wrap gap-4">
            <a href="#overview" className="px-8 py-4 bg-[#c9a84c] text-[#080808] font-semibold text-sm tracking-wide hover:bg-[#e8d48b] transition-all btn-premium shimmer rounded-xl">
              Explore Project
            </a>
            <a href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20The%20Meadow%20Breeze%20project.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/15 text-white font-medium text-sm tracking-wide hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-all rounded-xl">
              Book Site Visit
            </a>
          </div>
        </div>
      </div>

      <div className="hero-fade-5 absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <a href="#overview" className="flex flex-col items-center text-white/30 hover:text-[#c9a84c] transition-colors">
          <span className="text-[10px] tracking-[0.3em] uppercase mb-3">Explore</span>
          <div className="float-gentle"><ChevronDown size={18} /></div>
        </a>
      </div>
    </section>
  );
}
