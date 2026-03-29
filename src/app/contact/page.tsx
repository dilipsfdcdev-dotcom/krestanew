import type { Metadata } from 'next'
import { ContactPageContent } from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Kresta Infra & Developers. Call +91-9888932555 or visit our office in Hyderabad.',
}

export default function ContactPage() {
  return <ContactPageContent />
}
