'use client';

import { motion } from 'framer-motion';
import { Award, MapPin, Leaf, ShieldCheck } from 'lucide-react';
import Reveal from './ui/Reveal';
import Counter from './ui/Counter';
import FallbackImage from './FallbackImage';

const values = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'World-class development standards and materials ensuring lasting value for generations.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear & Legal Titles',
    description: 'Fully documented, dispute-free titles with transparent, registry-ready paperwork.',
  },
  {
    icon: MapPin,
    title: 'Strategic Locations',
    description: 'Prime growth corridors with excellent connectivity and strong appreciation potential.',
  },
];

const miniStats = [
  { value: 50, suffix: '+', label: 'Acres Developed' },
  { value: 124, suffix: '', label: 'Plots Crafted' },
  { value: 100, suffix: '%', label: 'Organic Setup' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pattern-lines absolute right-0 top-0 h-full w-1/2 opacity-[0.06]" />

      <div className="container-luxury">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <Reveal direction="right">
              <span className="section-subtitle mb-4 block font-semibold text-[#c9a962]">
                About Kresta
              </span>
              <h2 className="section-title font-bold text-[#1a1a1a]">
                Crafting Luxury,
                <span className="text-[#1a4d2e]"> Building Greener Dreams</span>
              </h2>
              <div className="line-gold-solid my-7" />
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Kresta Infra &amp; Developers Pvt. Ltd. is a premier real-estate
                developer specialising in premium managed-farmland communities,
                luxury residences, commercial spaces and integrated townships.
              </p>
              <p className="mb-8 leading-relaxed text-gray-600">
                We do not just sell land — we cultivate living ecosystems. Every
                Kresta estate blends modern infrastructure with sustainable,
                forest-first design so your investment grows in value and in
                green, year after year.
              </p>
            </Reveal>

            {/* Values */}
            <div className="space-y-5">
              {values.map((value, index) => (
                <Reveal key={value.title} direction="right" delay={0.15 + index * 0.1}>
                  <div className="group flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#1a4d2e]/10 transition-colors group-hover:bg-[#c9a962]/20">
                      <value.icon className="h-5 w-5 text-[#1a4d2e] transition-colors group-hover:text-[#c9a962]" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-[#1a1a1a]">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <Reveal direction="left" delay={0.15} className="relative">
            <div className="relative">
              <div className="img-zoom relative h-[520px] overflow-hidden rounded-3xl shadow-2xl">
                <FallbackImage
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80"
                  alt="Kresta managed farmland estate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  fallbackText="Kresta Estate"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                {/* Mini stat band on the image */}
                <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/15 bg-black/35 backdrop-blur-md">
                  {miniStats.map((s) => (
                    <div key={s.label} className="px-3 py-4 text-center">
                      <p className="text-xl font-bold text-[#e8d5a3] md:text-2xl">
                        <Counter to={s.value} suffix={s.suffix} />
                      </p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wide text-white/70">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating credibility card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -left-5 -top-5 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a962]">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold leading-none text-[#1a1a1a]">Forest-First</h4>
                  <p className="text-xs text-gray-500">Sustainable by design</p>
                </div>
              </motion.div>

              <div className="absolute -bottom-4 right-16 h-16 w-16 rounded-full bg-[#c9a962]/15" />
              <div className="absolute -right-4 top-24 h-24 w-24 rounded-3xl border-2 border-[#c9a962]/40" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
