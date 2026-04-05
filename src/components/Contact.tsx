'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const contactInfo = [
  { icon: Phone, title: 'Phone', value: '+91-9888932555', link: 'tel:+919888932555' },
  { icon: Mail, title: 'Email', value: 'info@kresta.in', link: 'mailto:info@kresta.in' },
  { icon: MapPin, title: 'Office', value: '94, HIG, TV Colony, Vanasthalipuram, Hyderabad - 500070', link: 'https://maps.app.goo.gl/4HvLznBYEHfcQcHP7' },
  { icon: Clock, title: 'Hours', value: 'Mon - Sat: 9:00 AM - 7:00 PM', link: null },
];

export default function Contact() {
  const { ref, visible } = useReveal();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', plotSize: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm ${formData.name}. I'm interested in The Meadow Breeze project.\n\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterested Plot Size: ${formData.plotSize}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919888932555?text=${encodeURIComponent(message)}`, '_blank');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-[#0c0c0c] relative">
      <div className="container-luxury" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <span className="label-gold mb-6 block">Get in Touch</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="heading-section text-white font-[family-name:var(--font-heading)]">
              Let&apos;s Start a{' '}
              <span className="text-gold-gradient italic">Conversation</span>
            </h2>
            <p className="text-white/40 max-w-md lg:text-right">
              Ready to own your piece of paradise? Reach out and let us guide you through the journey
            </p>
          </div>
          <div className="divider-fade w-full mt-8" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className={`reveal-left ${visible ? 'visible' : ''} lg:col-span-2`}>
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, i) => {
                const Inner = (
                  <div className="group flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4af37]/10 transition-colors">
                      <info.icon className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs tracking-widest uppercase mb-1">{info.title}</p>
                      <p className="text-white/80 text-sm">{info.value}</p>
                    </div>
                  </div>
                );
                return info.link ? (
                  <a key={info.title} href={info.link} target={info.title === 'Office' ? '_blank' : undefined} rel="noopener noreferrer" className={`reveal ${visible ? 'visible' : ''} stagger-${i + 1} block`}>{Inner}</a>
                ) : (
                  <div key={info.title} className={`reveal ${visible ? 'visible' : ''} stagger-${i + 1}`}>{Inner}</div>
                );
              })}
            </div>

            <div className={`reveal ${visible ? 'visible' : ''} stagger-5 p-6 bg-gradient-to-br from-[#25d366]/20 to-[#128c7e]/10 rounded-lg border border-[#25d366]/20`}>
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-8 h-8 text-[#25d366]" />
                <div>
                  <h4 className="font-semibold text-white text-sm">WhatsApp</h4>
                  <p className="text-white/40 text-xs">Instant replies</p>
                </div>
              </div>
              <a
                href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20The%20Meadow%20Breeze%20project.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25d366] text-white rounded text-sm font-medium hover:bg-[#128c7e] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />Chat Now
              </a>
            </div>
          </div>

          <div className={`reveal-right ${visible ? 'visible' : ''} lg:col-span-3`}>
            <div className="glass rounded-lg p-8 md:p-10">
              <h3 className="text-xl font-bold text-white mb-8 font-[family-name:var(--font-heading)]">Send us a message</h3>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <CheckCircle className="w-14 h-14 text-[#d4af37] mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-white/40 text-sm">Redirecting to WhatsApp...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] tracking-widest uppercase text-white/30 mb-2">Full Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-[#d4af37] focus:outline-none transition-colors placeholder:text-white/20" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-widest uppercase text-white/30 mb-2">Phone *</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-[#d4af37] focus:outline-none transition-colors placeholder:text-white/20" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-white/30 mb-2">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-[#d4af37] focus:outline-none transition-colors placeholder:text-white/20" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-white/30 mb-2">Interested Plot Size</label>
                    <select value={formData.plotSize} onChange={(e) => setFormData({...formData, plotSize: e.target.value})} className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-[#d4af37] focus:outline-none transition-colors appearance-none">
                      <option value="" className="bg-[#161616]">Select plot size</option>
                      <option value="10 Guntas" className="bg-[#161616]">10 Guntas (1,210 sq yards)</option>
                      <option value="20 Guntas" className="bg-[#161616]">20 Guntas (2,420 sq yards)</option>
                      <option value="30 Guntas" className="bg-[#161616]">30 Guntas (3,630 sq yards)</option>
                      <option value="40 Guntas" className="bg-[#161616]">40 Guntas (4,840 sq yards)</option>
                      <option value="50 Guntas" className="bg-[#161616]">50 Guntas (6,050 sq yards)</option>
                      <option value="Custom" className="bg-[#161616]">Custom Size</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-white/30 mb-2">Message</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-[#d4af37] focus:outline-none transition-colors resize-none placeholder:text-white/20" placeholder="Tell us about your requirements..." />
                  </div>
                  <button type="submit" className="w-full py-4 bg-[#d4af37] text-[#0c0c0c] rounded font-semibold text-sm tracking-wide hover:bg-[#f0d77b] transition-colors flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''} stagger-6 mt-16`}>
          <div className="rounded-lg overflow-hidden h-64 md:h-80 border border-white/5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.8!2d78.5547!3d17.3056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1c9a1555555%3A0x1234567890abcdef!2s94%2C%20HIG%2C%20TV%20Colony%2C%20Vanasthalipuram%2C%20Hyderabad%2C%20Telangana%20500070!5e0!3m2!1sen!2sin!4v1704067200000" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
