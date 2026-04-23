import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Kresta Infra & Developers | The Meadow Breeze - Premium Farmland",
  description: "The Meadow Breeze by Kresta - Premium 50-acre farmland community at Peepal Pahad, Choutuppal. 600-900 plants per plot, 360° mountain views, gated community with world-class amenities.",
  keywords: "farmland, Hyderabad, Choutuppal, premium plots, organic farming, investment, Kresta, Meadow Breeze, Rachakonda",
  authors: [{ name: "Kresta Infra & Developers Pvt. Ltd." }],
  openGraph: {
    title: "The Meadow Breeze by Kresta - Premium Farmland Community",
    description: "Own your piece of paradise with 600-900 plants per plot. Premium farmland nestled in the hills of Rachakonda.",
    type: "website",
    locale: "en_IN",
    siteName: "Kresta Infra & Developers",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Meadow Breeze by Kresta",
    description: "Premium 50-acre farmland community with personal forest setup",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className="antialiased bg-[#050505] text-[#f5f5f4]">
        {children}
      </body>
    </html>
  );
}
