'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, Loader2 } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/utils'

interface FormData {
  name: string
  phone: string
  email: string
  plotSize: string
  message: string
}

export function ContactForm({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const isDark = variant === 'dark'

  const onSubmit = (data: FormData) => {
    const message = `Hi, I'm ${data.name}.

Phone: ${data.phone}
Email: ${data.email}
Interested Plot Size: ${data.plotSize || 'Not specified'}
Message: ${data.message || 'I would like more details about The Meadow Breeze.'}

Please share more details about your projects.`

    window.open(getWhatsAppUrl(message), '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`text-center p-8 rounded-2xl ${isDark ? 'glass-dark' : 'luxury-card'}`}>
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d4a843]/10 flex items-center justify-center">
          <Send className="w-7 h-7 text-[#d4a843]" />
        </div>
        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-[#0a2515]'}`}>
          Thank You!
        </h3>
        <p className={isDark ? 'text-white/60' : 'text-gray-500'}>
          Your message has been sent via WhatsApp. Our team will get back to you shortly.
        </p>
      </div>
    )
  }

  const inputClass = isDark
    ? 'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] outline-none transition-all text-sm'
    : 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] outline-none transition-all text-sm'

  const labelClass = isDark
    ? 'block text-white/70 text-sm font-medium mb-1.5'
    : 'block text-gray-700 text-sm font-medium mb-1.5'

  const errorClass = 'text-red-400 text-xs mt-1'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`p-6 sm:p-8 rounded-2xl ${isDark ? 'glass-dark' : 'luxury-card'}`}
    >
      <div className="space-y-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Your full name"
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            {...register('phone', {
              required: 'Phone is required',
              pattern: { value: /^[+]?[\d\s-]{10,}$/, message: 'Enter a valid phone number' },
            })}
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Email</label>
          <input
            {...register('email', {
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
            })}
            type="email"
            placeholder="your@email.com"
            className={inputClass}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Interested Plot Size</label>
          <select {...register('plotSize')} className={inputClass}>
            <option value="">Select plot size</option>
            <option value="10 Gunthas (~1,210 sq. yds)">10 Gunthas (~1,210 sq. yds)</option>
            <option value="12.5–15 Gunthas (~1,510–1,815 sq. yds)">12.5–15 Gunthas</option>
            <option value="17–20 Gunthas (~2,060–2,420 sq. yds)">17–20 Gunthas</option>
            <option value="22–25 Gunthas (~2,660–3,025 sq. yds)">22–25 Gunthas</option>
            <option value="25+ Gunthas (3,025+ sq. yds)">25+ Gunthas</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Message</label>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="Tell us about your requirements..."
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary justify-center disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send via WhatsApp
            </>
          )}
        </button>
      </div>
    </form>
  )
}
