// app/layout.jsx
import "./globals.css";
import { CartProvider } from "@/components/cart/CartContext";
import Nav from "@/components/Nav";
import CartDrawer from "@/components/CartDrawer";
import FabWhatsApp from "@/components/FabWhatsApp";

export const metadata = {
  title: {
    default: "Santa Birria | Cocina mexicana creativa",
    template: "%s | Santa Birria",
  },
  description: "Birria sagrada y menú directo en Ecuador.",
  themeColor: "#7a0e14",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-white text-neutral-900">
        <CartProvider>
          <Nav />
          <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
          <CartDrawer />
          <FabWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}

