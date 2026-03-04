import type { Metadata } from 'next'
import { AboutPageContent } from './AboutPageContent'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Kresta Infra & Developers Pvt. Ltd. — a premium real estate development company based in Hyderabad, specializing in luxury residences, farmland estates, and integrated townships.',
}

export default function AboutPage() {
  return <AboutPageContent />
}
