'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const marketFactors = [
  { factor: 'Rising Land Values', advantage: 'Rachakonda corridor showing rapid appreciation' },
  { factor: 'Limited Community', advantage: 'Only 124 plots in an exclusive gated community' },
  { factor: 'Clear Titles', advantage: 'All legal documentation verified and clear' },
  { factor: 'Infrastructure Growth', advantage: 'ORR, highways, and townships developing nearby' },
  { factor: 'Scarcity Premium', advantage: 'Large farmland estates becoming increasingly rare' },
];

const differentiators = [
  { title: 'Pre-planted Estate', desc: '600-900 plants already growing on each plot' },
  { title: '10 Premium Amenities', desc: 'World-class infrastructure and facilities included' },
  { title: 'Expert Support', desc: 'Agronomist guidance available for farming' },
  { title: '24/7 Security', desc: 'Gated community with CCTV surveillance' },
  { title: 'Prime Connectivity', desc: '30 km from ORR, 7 km from highway' },
];

export default function WhyInvest3D() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="invest" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0c14] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a962]/60 text-xs tracking-[0.3em] uppercase mb-4">Investment Opportunity</p>
          <h2 className="section-title font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
            Why Invest in The Meadow Breeze
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto text-sm">
            A rare opportunity to own premium farmland in one of Hyderabad&apos;s fastest-growing corridors
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Market Factors */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 glass rounded-2xl"
          >
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Market Factors
            </h3>
            <div className="space-y-4">
              {marketFactors.map((item, i) => (
                <motion.div
                  key={item.factor}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-1.5 h-1.5 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-[#c9a962] text-sm font-medium">{item.factor}</div>
                    <div className="text-white/30 text-xs mt-0.5">{item.advantage}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-3"
          >
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider px-2">
              Project Differentiators
            </h3>
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="p-5 glass rounded-xl hover:glass-gold transition-all duration-500 group"
              >
                <h4 className="text-white/80 text-sm font-semibold mb-1 group-hover:text-[#c9a962] transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/30 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-8 md:p-12 rounded-3xl glass-gold text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-[family-name:var(--font-heading)]">
            The Meadow Breeze is not just land.
          </h3>
          <p className="text-[#c9a962]/60 italic text-sm mb-8 font-[family-name:var(--font-heading)]">
            It is a legacy waiting to be cultivated.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-3.5 bg-[#c9a962] text-black font-semibold rounded-full btn-3d hover:bg-[#e8d5a3] transition-colors text-sm"
            >
              Start Your Legacy Today
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919888932555?text=Hi%2C%20I%20would%20like%20to%20speak%20with%20an%20investment%20advisor%20about%20The%20Meadow%20Breeze."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white/70 rounded-full hover:border-[#c9a962]/50 hover:text-[#c9a962] transition-all text-sm"
            >
              Speak to Investment Advisor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
