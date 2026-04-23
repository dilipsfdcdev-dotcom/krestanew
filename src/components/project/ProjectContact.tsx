'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Instagram,
} from 'lucide-react';

const plotSizes = [
  '10 Guntas',
  '20 Guntas',
  '30 Guntas',
  '40 Guntas',
  '50 Guntas',
  'Custom',
];

const contactLines = [
  { icon: Phone, label: 'Speak', value: '+91 98889 32555', href: 'tel:+919888932555' },
  { icon: Mail, label: 'Write', value: 'info@kresta.in', href: 'mailto:info@kresta.in' },
  {
    icon: MapPin,
    label: 'Visit',
    value: '94, HIG, TV Colony, Vanasthalipuram, Hyderabad · 500070',
    href: 'https://maps.app.goo.gl/4HvLznBYEHfcQcHP7',
  },
];

export default function ProjectContact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    plotSize: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. I'm interested in The Meadow Breeze.

Phone: ${form.phone}
Email: ${form.email}
Plot size: ${form.plotSize}
Message: ${form.message}`;
    window.open(
      `https://wa.me/919888932555?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-44 bg-[#050505]">
      <div className="container-edge">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Editorial side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="text-eyebrow mb-6">Book a private site visit</p>
            <h2 className="text-section text-white mb-8">
              Own your piece of
              <span className="italic text-gradient-gold"> paradise.</span>
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed max-w-md mb-12">
              Our concierge will reach out with plot availability, pricing and
              a site-visit slot at the Meadow Breeze.
            </p>

            <div className="space-y-0">
              {contactLines.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Visit' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-start gap-5 py-5 border-t border-white/10 last:border-b"
                >
                  <Icon className="w-4 h-4 text-[#c9a962] mt-1 shrink-0" />
                  <div className="flex-1">
                    <div className="text-[10px] tracking-[0.35em] uppercase text-white/40 mb-1.5">
                      {label}
                    </div>
                    <div className="text-white/90 group-hover:text-[#c9a962] transition-colors text-[15px]">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20The%20Meadow%20Breeze%20project.%20Please%20share%20more%20details."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25d366] text-white text-sm tracking-wide hover:bg-[#128c7e] transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp us
              </a>
              <a
                href="https://instagram.com/themeadowbreezebykresta"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/80 text-sm tracking-wide hover:border-[#c9a962]/60 hover:text-white transition-colors"
              >
                <Instagram size={16} /> @themeadowbreezebykresta
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 md:p-12">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <CheckCircle className="w-12 h-12 text-[#c9a962] mb-6" />
                  <h4 className="text-2xl font-serif text-white mb-2">Thank you.</h4>
                  <p className="text-white/60">Redirecting to WhatsApp…</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-7">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field
                      label="Full Name"
                      required
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                    />
                    <Field
                      label="Phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                    />
                  </div>
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                  />
                  <div>
                    <label className="block text-[10px] tracking-[0.35em] uppercase text-white/50 mb-3">
                      Plot size
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {plotSizes.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setForm({ ...form, plotSize: s })}
                          className={`px-4 py-2 rounded-full text-[12px] tracking-wide transition-all border ${
                            form.plotSize === s
                              ? 'bg-[#c9a962] text-black border-[#c9a962]'
                              : 'border-white/15 text-white/70 hover:border-[#c9a962]/60 hover:text-white'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <Field
                    label="Message"
                    textarea
                    value={form.message}
                    onChange={(v) => setForm({ ...form, message: v })}
                  />
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-3 py-4 rounded-full bg-[#c9a962] text-black font-medium tracking-wide hover:bg-[#e8d5a3] transition-colors"
                  >
                    Send via WhatsApp
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.35em] uppercase text-white/50 mb-3">
        {label}
        {required && <span className="text-[#c9a962]"> *</span>}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="w-full bg-transparent border-b border-white/15 focus:border-[#c9a962] outline-none py-3 text-white placeholder-white/30 transition-colors resize-none"
          placeholder="Tell us about your requirement"
        />
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent border-b border-white/15 focus:border-[#c9a962] outline-none py-3 text-white placeholder-white/30 transition-colors"
        />
      )}
    </label>
  );
}
