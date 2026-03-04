import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'Kresta Infra & Developers | Crafting Luxury, Building Dreams',
    template: '%s | Kresta Infra & Developers',
  },
  description:
    'Kresta Infra & Developers Pvt. Ltd. is a premium real estate development company in Hyderabad specializing in luxury residences, farmland estates, commercial developments, and integrated townships.',
  keywords: [
    'Kresta Infra',
    'luxury real estate Hyderabad',
    'premium farmland',
    'The Meadow Breeze',
    'Choutuppal plots',
    'farmland investment',
    'Rachakonda Hills',
    'luxury villas Hyderabad',
    'gated community farmland',
  ],
  authors: [{ name: 'Kresta Infra & Developers Pvt. Ltd.' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kresta Infra & Developers',
    title: 'Kresta Infra & Developers | Crafting Luxury, Building Dreams',
    description:
      'Premium real estate development company specializing in luxury residences, farmland estates, and integrated townships in Hyderabad.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kresta Infra & Developers | Crafting Luxury, Building Dreams',
    description:
      'Premium real estate development company in Hyderabad.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Kresta Infra & Developers Pvt. Ltd.',
              description:
                'Premium real estate development company specializing in luxury residences, farmland estates, and integrated townships.',
              url: 'https://kresta.in',
              telephone: '+91-9888932555',
              email: 'info@kresta.in',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '94, HIG, TV Colony, Vanasthalipuram',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                postalCode: '500070',
                addressCountry: 'IN',
              },
              foundingDate: '2025',
              areaServed: 'Hyderabad, Telangana, India',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
