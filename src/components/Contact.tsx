'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+91-9888932555',
    link: 'tel:+919888932555',
    color: 'bg-green-500',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@kresta.in',
    link: 'mailto:info@kresta.in',
    color: 'bg-blue-500',
  },
  {
    icon: MapPin,
    title: 'Office Address',
    value: '94, HIG, TV Colony, Vanasthalipuram, Hyderabad - 500070',
    link: 'https://maps.google.com',
    color: 'bg-red-500',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon - Sat: 9:00 AM - 7:00 PM',
    link: null,
    color: 'bg-purple-500',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotSize: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate WhatsApp message
    const message = `Hi, I'm ${formData.name}. I'm interested in The Meadow Breeze project.

Phone: ${formData.phone}
Email: ${formData.email}
Interested Plot Size: ${formData.plotSize}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/919888932555?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#faf8f5] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute inset-0 bg-gradient-to-l from-[#c9a962] to-transparent" />
      </div>

      <div className="container-luxury relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle text-[#c9a962] font-medium mb-4 block">
            Get in Touch
          </span>
          <h2 className="section-title font-bold text-[#1a1a1a] mb-4">
            Contact Us
          </h2>
          <div className="flex justify-center mb-6">
            <div className="line-gold" />
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ready to own your piece of paradise? Reach out to us and let's discuss
            how we can help you find the perfect plot
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.title === 'Office Address' ? '_blank' : undefined}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                    >
                      <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1a1a1a] mb-1">{info.title}</h4>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                      <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1a1a1a] mb-1">{info.title}</h4>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-gradient-to-br from-[#25d366] to-[#128c7e] rounded-2xl text-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="w-10 h-10" />
                <div>
                  <h4 className="font-bold text-xl">Quick Response on WhatsApp</h4>
                  <p className="text-white/80">Get instant replies to your queries</p>
                </div>
              </div>
              <a
                href="https://wa.me/919888932555?text=Hi%2C%20I%27m%20interested%20in%20The%20Meadow%20Breeze%20project.%20Please%20share%20more%20details."
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#25d366] rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Send us a message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-semibold text-[#1a1a1a] mb-2">Message Sent!</h4>
                  <p className="text-gray-600">Redirecting to WhatsApp...</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Plot Size
                    </label>
                    <select
                      value={formData.plotSize}
                      onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select plot size</option>
                      <option value="10 Guntas">10 Guntas (1,210 sq yards)</option>
                      <option value="20 Guntas">20 Guntas (2,420 sq yards)</option>
                      <option value="30 Guntas">30 Guntas (3,630 sq yards)</option>
                      <option value="40 Guntas">40 Guntas (4,840 sq yards)</option>
                      <option value="50 Guntas">50 Guntas (6,050 sq yards)</option>
                      <option value="Custom">Custom Size</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-luxury w-full py-4 bg-[#1a1a1a] text-white rounded-xl font-medium hover:bg-[#333] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-white p-4 rounded-2xl shadow-xl">
            <div className="rounded-xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.1234!2d78.7234!3d17.3234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE5JzI0LjEiTiA3OMKwNDMnMjQuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
