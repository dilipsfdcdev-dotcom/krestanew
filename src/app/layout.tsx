import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://kresta.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kresta Infra & Developers | The Meadow Breeze — Premium Farmland",
    template: "%s | Kresta Infra & Developers",
  },
  description:
    "The Meadow Breeze by Kresta — a 50-acre premium managed-farmland community at Peepal Pahad, Choutuppal. 600–900 plants per plot, 360° Rachakonda mountain views, gated community with world-class amenities. Just 25 km from ORR Exit 11.",
  keywords: [
    "farmland Hyderabad",
    "managed farmland Choutuppal",
    "premium plots Rachakonda",
    "organic farmland investment",
    "Kresta Developers",
    "The Meadow Breeze",
    "weekend farmhouse Hyderabad",
    "gated farmland community",
  ],
  authors: [{ name: "Kresta Infra & Developers Pvt. Ltd." }],
  creator: "Kresta Infra & Developers Pvt. Ltd.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Meadow Breeze by Kresta — Premium Farmland Community",
    description:
      "Own your piece of paradise. 600–900 plants per plot, 360° mountain views and a self-sustaining forest setup — premium managed farmland in the hills of Rachakonda.",
    url: SITE_URL,
    type: "website",
    locale: "en_IN",
    siteName: "Kresta Infra & Developers",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Meadow Breeze by Kresta",
    description:
      "Premium 50-acre managed-farmland community with a personal forest setup of 600–900 plants per plot.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0d2818",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Kresta Infra & Developers Pvt. Ltd.",
  url: SITE_URL,
  telephone: "+91-9888932555",
  email: "info@kresta.in",
  slogan: "Crafting Luxury, Building Dreams",
  address: {
    "@type": "PostalAddress",
    streetAddress: "94, HIG, TV Colony, Vanasthalipuram",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500070",
    addressCountry: "IN",
  },
  makesOffer: {
    "@type": "Offer",
    name: "The Meadow Breeze — Premium Farmland Plots",
    category: "Managed Farmland",
    areaServed: "Hyderabad, Telangana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/company/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-cream text-charcoal">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
