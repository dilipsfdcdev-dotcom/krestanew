'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, ChevronDown } from 'lucide-react';

const plotSizes = [
  '10 Guntas (1,210 sq yards)',
  '20 Guntas (2,420 sq yards)',
  '30 Guntas (3,630 sq yards)',
  '40 Guntas (4,840 sq yards)',
  '50 Guntas (6,050 sq yards)',
  'Custom Size',
];

export default function ProjectContact3D() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    plotSize: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. I'm interested in The Meadow Breeze project.\n\nPhone: ${form.phone}\nEmail: ${form.email || 'N/A'}\nInterested Plot Size: ${form.plotSize || 'N/A'}\nMessage: ${form.message || 'N/A'}`;
    const url = `https://wa.me/919888932555?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0c14] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a962]/60 text-xs tracking-[0.3em] uppercase mb-4">Get Started</p>
          <h2 className="section-title font-bold text-gradient-gold font-[family-name:var(--font-heading)]">
            Book Your Site Visit
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-sm">
            Ready to own your piece of paradise? Contact us today and let our team guide you through The Meadow Breeze experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <a
              href="tel:+919888932555"
              className="group flex items-center gap-4 p-5 glass rounded-2xl hover:glass-gold transition-all duration-500"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#c9a962]/10 group-hover:bg-[#c9a962]/20 transition-colors">
                <Phone size={18} className="text-[#c9a962]" />
              </div>
              <div>
                <div className="text-white/30 text-xs uppercase tracking-wider mb-0.5">Call Us</div>
                <div className="text-white/70 text-sm group-hover:text-[#c9a962] transition-colors">+91-9888932555</div>
              </div>
            </a>

            <a
              href="mailto:info@kresta.in"
              className="group flex items-center gap-4 p-5 glass rounded-2xl hover:glass-gold transition-all duration-500"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#c9a962]/10 group-hover:bg-[#c9a962]/20 transition-colors">
                <Mail size={18} className="text-[#c9a962]" />
              </div>
              <div>
                <div className="text-white/30 text-xs uppercase tracking-wider mb-0.5">Email</div>
                <div className="text-white/70 text-sm group-hover:text-[#c9a962] transition-colors">info@kresta.in</div>
              </div>
            </a>

            <a
              href="https://maps.app.goo.gl/4HvLznBYEHfcQcHP7"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 glass rounded-2xl hover:glass-gold transition-all duration-500"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#c9a962]/10 group-hover:bg-[#c9a962]/20 transition-colors">
                <MapPin size={18} className="text-[#c9a962]" />
              </div>
              <div>
                <div className="text-white/30 text-xs uppercase tracking-wider mb-0.5">Office</div>
                <div className="text-white/70 text-sm group-hover:text-[#c9a962] transition-colors">
                  94, HIG, TV Colony, Vanasthalipuram, Hyderabad - 500070
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919888932555"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 border border-[#25D366]/20 hover:border-[#25D366]/40 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle size={20} className="text-[#25D366]" />
                <span className="text-[#25D366] font-semibold text-sm">Quick Response on WhatsApp</span>
              </div>
              <p className="text-white/30 text-xs mb-4">Get instant replies to your queries</p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-full group-hover:bg-[#128C7E] transition-colors">
                Chat on WhatsApp
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/themeadowbreezebykresta"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 glass rounded-2xl hover:glass-gold transition-all duration-500 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white/30 text-xs uppercase tracking-wider mb-0.5">Instagram</div>
                  <div className="text-white/70 text-sm group-hover:text-[#c9a962] transition-colors">
                    @themeadowbreezebykresta
                  </div>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white text-xs font-semibold">
                  Follow
                </div>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass space-y-5">
              <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-heading)] mb-1">
                Request Information
              </h3>
              <p className="text-white/30 text-xs mb-4">Fill in your details and we&apos;ll get back to you</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-white/40 text-xs mb-2 uppercase tracking-wider">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/20 focus:border-[#c9a962]/50 focus:outline-none focus:ring-1 focus:ring-[#c9a962]/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white/40 text-xs mb-2 uppercase tracking-wider">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/20 focus:border-[#c9a962]/50 focus:outline-none focus:ring-1 focus:ring-[#c9a962]/20 transition-all"
                    placeholder="+91-XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-white/40 text-xs mb-2 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/20 focus:border-[#c9a962]/50 focus:outline-none focus:ring-1 focus:ring-[#c9a962]/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="relative">
                  <label className="block text-white/40 text-xs mb-2 uppercase tracking-wider">Interested Plot Size</label>
                  <div className="relative">
                    <select
                      value={form.plotSize}
                      onChange={(e) => setForm({ ...form, plotSize: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm appearance-none focus:border-[#c9a962]/50 focus:outline-none focus:ring-1 focus:ring-[#c9a962]/20 transition-all cursor-pointer"
                    >
                      <option value="" className="bg-[#1a1a2e]">Select plot size</option>
                      {plotSizes.map((size) => (
                        <option key={size} value={size} className="bg-[#1a1a2e]">{size}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-xs mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/20 focus:border-[#c9a962]/50 focus:outline-none focus:ring-1 focus:ring-[#c9a962]/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#c9a962] text-black font-semibold rounded-full btn-3d hover:bg-[#e8d5a3] transition-colors text-sm"
              >
                <Send size={16} />
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
