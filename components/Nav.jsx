"use client";
import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "./cart/CartContext";
import BrandLogo from "./BrandLogo";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { items, toggle } = useCart();
  const count = items.reduce((a, b) => a + b.qty, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-blanco/90 backdrop-blur">
      <div className="container-p flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="transition-transform hover:-rotate-6 hover:scale-105">
            <BrandLogo size={36} />
          </span>
          <span className="font-display text-xl font-bold text-vino">Santa Birria</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/menu" className="text-carbón hover:text-vino">Carta</Link>
          <a href="#menu" className="text-carbón hover:text-vino">Menú</a>
          <a href="#combos" className="text-carbón hover:text-vino">Combos</a>
          <a href="#ubicacion" className="text-carbón hover:text-vino">Ubicación</a>
          <a href="#contacto" className="text-carbón hover:text-vino">Contacto</a>

          <button
            aria-label="Carrito"
            className="relative rounded-xl2 border border-neutral-200 p-2 hover:border-vino"
            onClick={toggle}
          >
            <ShoppingCart />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-vino px-2 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Carrito"
            className="relative rounded-xl2 border border-neutral-200 p-2"
            onClick={toggle}
          >
            <ShoppingCart />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-vino px-2 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </button>
          <button aria-label="Abrir menú" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-blanco">
          <div className="container-p flex flex-col py-3">
            <Link href="/menu" className="py-2" onClick={() => setOpen(false)}>Carta</Link>
            <a href="#menu" className="py-2" onClick={() => setOpen(false)}>Menú</a>
            <a href="#combos" className="py-2" onClick={() => setOpen(false)}>Combos</a>
            <a href="#ubicacion" className="py-2" onClick={() => setOpen(false)}>Ubicación</a>
            <a href="#contacto" className="py-2" onClick={() => setOpen(false)}>Contacto</a>
          </div>
        </div>
      )}
    </header>
  );
}
