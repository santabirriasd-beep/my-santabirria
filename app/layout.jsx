import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/components/cart/CartContext";
import { rye, montserrat, openSans } from "./fonts";

export const metadata = {
  title: "Santa Birria",
  description: "Cocina mexicana creativa — Santa Birria"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${rye.variable} ${montserrat.variable} ${openSans.variable}`}>
      <body className="font-body">
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
