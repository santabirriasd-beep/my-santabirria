export const metadata = {
  title: "Santa Birria",
  description: "Cocina mexicana creativa — Santa Birria"
};

import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
