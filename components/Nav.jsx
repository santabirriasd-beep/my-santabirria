"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";

export default function Nav() {
  const cart = typeof useCart === "function" ? useCart() : {};
  const open = () => {
    if (cart?.openCart) cart.openCart();
    else if (cart?.toggleCart) cart.toggleCart();
  };
  const count = typeof cart?.count === "number" ? cart.count : cart?.items?.length || 0;

  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#7a0e14] font-bold text-white">
            SB
          </span>
          <span className="text-lg font-semibold tracking-wide text-[#7a0e14]">
            Santa Birria
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-neutral-800 md:flex">
          <a href="#momentos" className="hover:text-[#7a0e14]">Momentos</a>
          <a href="#historia" className="hover:text-[#7a0e14]">Historia</a>
          <a href="#menu" className="hover:text-[#7a0e14]">Menú</a>
          <a href="#combos" className="hover:text-[#7a0e14]">Combos</a>
          <a href="#ubicacion" className="hover:text-[#7a0e14]">Ubicación</a>
          <a href="#contacto" className="hover:text-[#7a0e14]">Contacto</a>
        </nav>
      </div>

      {/* Botón flotante del carrito (abre el drawer a la izquierda) */}
      <button
        onClick={open}
        aria-label="Abrir carrito"
        className="fixed right-4 top-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#7a0e14] text-white shadow-lg hover:bg-[#93121a] focus:outline-none focus:ring-2 focus:ring-[#7a0e14] focus:ring-offset-2"
      >
        <ShoppingCart className="h-5 w-5" />
        {count > 0 && (
          <span className="absolute -bottom-1 -right-1 inline-flex min-w-[20px] items-center justify-center rounded-full bg-white px-1 text-xs font-semibold text-[#7a0e14] shadow">
            {count}
          </span>
        )}
      </button>
    </header>
  );
}
