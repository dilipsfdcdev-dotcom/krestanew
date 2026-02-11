'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function ProjectContact() {
  const { ref, visible } = useReveal();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', plotSize: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${formData.name}. I'm interested in The Meadow Breeze project.\n\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterested Plot Size: ${formData.plotSize}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919888932555?text=${encodeURIComponent(msg)}`, '_blank');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-[#080808] relative section-glow">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <span className="label-gold mb-6 block font-[family-name:var(--font-body)]">Get In Touch</span>
          <h2 className="heading-section text-white mb-6 font-[family-name:var(--font-heading)]">
            Book Your{' '}
            <span className="text-gold-gradient italic">Site Visit</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-white/40 max-w-2xl">Ready to own your piece of paradise? Contact us today and let our team guide you through The Meadow Breeze experience</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`reveal-left ${visible ? 'visible' : ''} space-y-4`}>
            <a href="tel:+919888932555" className="flex items-center gap-4 p-5 glass rounded-2xl hover:border-[#c9a84c]/20 transition-all group glow-hover">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors"><Phone className="w-5 h-5 text-green-400" /></div>
              <div><p className="text-white/30 text-xs tracking-widest uppercase font-[family-name:var(--font-body)]">Call Us</p><p className="text-white font-semibold">+91-9888932555</p></div>
            </a>
            <a href="mailto:info@kresta.in" className="flex items-center gap-4 p-5 glass rounded-2xl hover:border-[#c9a84c]/20 transition-all group glow-hover">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors"><Mail className="w-5 h-5 text-blue-400" /></div>
              <div><p className="text-white/30 text-xs tracking-widest uppercase font-[family-name:var(--font-body)]">Email Us</p><p className="text-white font-semibold">info@kresta.in</p></div>
            </a>
            <div className="flex items-center gap-4 p-5 glass rounded-2xl glow-hover">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center"><MapPin className="w-5 h-5 text-red-400" /></div>
              <div><p className="text-white/30 text-xs tracking-widest uppercase font-[family-name:var(--font-body)]">Office Address</p><p className="text-white/80 text-sm">94, HIG, TV Colony, Vanasthalipuram, Hyderabad - 500070</p></div>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#25d366]/20 to-[#128c7e]/10 rounded-2xl border border-[#25d366]/20">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-8 h-8 text-[#25d366]" />
                <div><h4 className="font-semibold text-white text-sm">Quick Response on WhatsApp</h4><p className="text-white/40 text-xs">Get instant replies to your queries</p></div>
              </div>
              <a href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20The%20Meadow%20Breeze%20project.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25d366] text-white rounded-xl text-sm font-medium hover:bg-[#128c7e] transition-colors">
                <MessageCircle className="w-4 h-4" />Chat on WhatsApp
              </a>
            </div>

            <a href="https://instagram.com/themeadowbreezebykresta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-gradient-to-br from-[#833ab4]/20 via-[#fd1d1d]/10 to-[#fcb045]/10 rounded-2xl border border-white/5 hover:border-white/10 transition-all glow-hover">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </div>
              <div><p className="text-white/40 text-xs">Follow us on Instagram</p><p className="font-semibold text-white text-sm">@themeadowbreezebykresta</p></div>
            </a>
          </div>

          <div className={`reveal-right ${visible ? 'visible' : ''}`}>
            <div className="glass rounded-2xl p-8 md:p-10 glow-hover">
              <h3 className="text-xl font-semibold text-white mb-8 font-[family-name:var(--font-heading)]">Request Information</h3>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <CheckCircle className="w-14 h-14 text-[#c9a84c] mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-white/40 text-sm">Redirecting to WhatsApp...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] tracking-widest uppercase text-white/30 mb-2 font-[family-name:var(--font-body)]">Full Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3.5 input-premium rounded-xl text-white text-sm placeholder:text-white/20" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-widest uppercase text-white/30 mb-2 font-[family-name:var(--font-body)]">Phone *</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3.5 input-premium rounded-xl text-white text-sm placeholder:text-white/20" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-white/30 mb-2 font-[family-name:var(--font-body)]">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3.5 input-premium rounded-xl text-white text-sm placeholder:text-white/20" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-white/30 mb-2 font-[family-name:var(--font-body)]">Interested Plot Size</label>
                    <select value={formData.plotSize} onChange={(e) => setFormData({...formData, plotSize: e.target.value})} className="w-full px-4 py-3.5 input-premium rounded-xl text-white text-sm appearance-none">
                      <option value="" className="bg-[#111111]">Select plot size</option>
                      <option value="10 Guntas" className="bg-[#111111]">10 Guntas (1,210 sq yards)</option>
                      <option value="20 Guntas" className="bg-[#111111]">20 Guntas (2,420 sq yards)</option>
                      <option value="30 Guntas" className="bg-[#111111]">30 Guntas (3,630 sq yards)</option>
                      <option value="40 Guntas" className="bg-[#111111]">40 Guntas (4,840 sq yards)</option>
                      <option value="50 Guntas" className="bg-[#111111]">50 Guntas (6,050 sq yards)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-white/30 mb-2 font-[family-name:var(--font-body)]">Message</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3.5 input-premium rounded-xl text-white text-sm resize-none placeholder:text-white/20" placeholder="Tell us about your requirements..." />
                  </div>
                  <button type="submit" className="w-full py-4 bg-[#c9a84c] text-[#080808] rounded-xl font-semibold text-sm tracking-wide hover:bg-[#e8d48b] transition-colors flex items-center justify-center gap-2 btn-premium shimmer">
                    <Send className="w-4 h-4" />Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
