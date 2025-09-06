export const metadata = {
  title: "Santa Birria",
  description: "Cocina mexicana creativa — Santa Birria",
  openGraph: {
    title: "Santa Birria",
    description: "Cocina mexicana creativa — Santa Birria",
    url: "https://tusitio.com",
    siteName: "Santa Birria",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "Santa Birria" }],
    locale: "es_EC",
    type: "website"
  },
  icons: { icon: "/logo.svg" }
};

import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/cart/CartContext";
import CartDrawer from "@/components/CartDrawer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Santa Birria",
  "image": "https://tusitio.com/hero.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Santo Domingo de los Tsáchilas",
    "addressCountry": "EC"
  },
  "telephone": "+593984755209",
  "servesCuisine": "Mexicana",
  "priceRange": "$$",
  "openingHours": "Tu-Su 12:00-23:00",
  "sameAs": [
    "https://instagram.com/santabirria",
    "https://tiktok.com/@santabirria"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <CartProvider>
          <Nav />
          {children}
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
