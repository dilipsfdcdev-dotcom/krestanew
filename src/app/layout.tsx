import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kresta Infra & Developers | The Meadow Breeze - Premium Farmland",
  description:
    "The Meadow Breeze by Kresta - Premium 100-acre farmland community at Peepal Pahad, Choutuppal. 600-900 plants per plot, 360° mountain views, gated community with world-class amenities.",
  keywords:
    "farmland, Hyderabad, Choutuppal, premium plots, organic farming, investment, Kresta, Meadow Breeze, Rachakonda",
  authors: [{ name: "Kresta Infra & Developers Pvt. Ltd." }],
  openGraph: {
    title: "The Meadow Breeze by Kresta - Premium Farmland Community",
    description:
      "Own your piece of paradise with 600-900 plants per plot. Premium farmland nestled in the hills of Rachakonda.",
    type: "website",
    locale: "en_IN",
    siteName: "Kresta Infra & Developers",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Meadow Breeze by Kresta",
    description:
      "Premium 100-acre farmland community with personal forest setup",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&display=swap" rel="stylesheet" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/company/logo.png" />
        <meta name="theme-color" content="#0c0c0c" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
