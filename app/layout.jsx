import "./globals.css";
import { CartProvider } from "@/components/cart/CartContext";
import Nav from "@/components/Nav";
import CartDrawer from "@/components/CartDrawer";
import FabWhatsApp from "@/components/FabWhatsApp";

export const metadata = {
  title: "Santa Birria | Cocina mexicana creativa",
  description: "Birria sagrada y menú directo en Ecuador."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
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

