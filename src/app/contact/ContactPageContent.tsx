'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { FadeInUp } from '@/components/MotionWrapper'
import { ContactForm } from '@/components/ContactForm'
import { company } from '@/data/company'
import { getWhatsAppUrl } from '@/lib/utils'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: company.phone, href: `tel:${company.phone}` },
  { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: 'Office', value: company.address, href: company.salesOfficeMap },
  { icon: Clock, label: 'Working Hours', value: company.workingHours, href: undefined },
]

export function ContactPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#33200F] via-[#4F3408] to-[#3F1C15]" />
        <div className="relative z-10 container-luxury mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#8D5B30] text-sm tracking-[0.3em] uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact <span className="gradient-text-gold">Us</span>
            </h1>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We&apos;d love to hear from you. Reach out for project inquiries, site visits, or any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-white">
        <div className="container-luxury mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <FadeInUp>
              <h2 className="text-3xl font-bold text-[#33200F] mb-8">
                Let&apos;s Start a Conversation
              </h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#33200F] flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#8D5B30]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-[#33200F] font-medium hover:text-[#8D5B30] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#33200F] font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Quick Chat */}
              <a
                href={getWhatsAppUrl('Hi, I am interested in Kresta projects. Please share more details.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#20bd5a] transition-colors font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                Quick Chat on WhatsApp
              </a>
            </FadeInUp>

            {/* Form */}
            <FadeInUp delay={0.2}>
              <ContactForm variant="light" />
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[450px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.4!2d78.553!3d17.325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba2c4b0c00001%3A0x1!2sVanasthalipuram%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kresta Office Location"
        />
      </section>
    </>
  )
}
