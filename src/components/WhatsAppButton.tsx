'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/utils'

export function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppUrl('Hi, I am interested in Kresta projects. Please share more details.')}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </motion.a>
  )
}
