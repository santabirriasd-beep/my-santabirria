"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./cart/CartContext";
import BrandLogo from "./BrandLogo";

export default function Nav() {
  const { openCart } = useCart();

  return (
    <header className="sticky top-0 z-[60] bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <BrandLogo />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-neutral-700">
          <Link href="/momentos">Momentos</Link>
          <Link href="/historia">Historia</Link>
          <Link href="/menu">Menú</Link>
          <Link href="/combos">Combos</Link>
          <Link href="/ubicacion">Ubicación</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <button
          type="button"
          aria-label="Abrir carrito"
          onClick={openCart}
          className="relative z-[70] inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-800 text-white"
        >
          <ShoppingCart size={18} />
        </button>
      </div>

      <div className="md:hidden px-4 pb-3 flex flex-wrap gap-x-4 gap-y-2 text-neutral-700">
        <Link href="/momentos">Momentos</Link>
        <Link href="/historia">Historia</Link>
        <Link href="/menu">Menú</Link>
        <Link href="/combos">Combos</Link>
        <Link href="/ubicacion">Ubicación</Link>
        <Link href="/contacto">Contacto</Link>
      </div>
    </header>
  );
}
