// components/Nav.jsx
"use client";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";

export default function Nav() {
  const { openCart, items } = useCart();
  const count = Array.isArray(items)
    ? items.reduce((a, it) => a + (it.qty || 0), 0)
    : 0;

  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#7a0e14] font-bold text-white">
            SB
          </span>
          <span className="text-lg font-semibold tracking-wide text-[#7a0e14]">
            Santa Birria
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-neutral-800 md:flex">
          {/* Abrir SIEMPRE en otra pestaña */}
          <Link
            href="/momentos"
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
            className="hover:text-[#7a0e14]"
          >
            Momentos
          </Link>

          <a href="#historia" className="hover:text-[#7a0e14]">Historia</a>
          <a href="#menu" className="hover:text-[#7a0e14]">Menú</a>
          <a href="#combos" className="hover:text-[#7a0e14]">Combos</a>
          <a href="#ubicacion" className="hover:text-[#7a0e14]">Ubicación</a>
          <a href="#contacto" className="hover:text-[#7a0e14]">Contacto</a>
        </nav>
      </div>

      <button
        onClick={openCart}
        aria-label="Abrir carrito"
        className="fixed right-4 top-4 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#7a0e14] text-white shadow-lg hover:bg-[#93121a] focus:outline-none focus:ring-2 focus:ring-[#7a0e14] focus:ring-offset-2"
      >
        <ShoppingBag className="h-6 w-6" strokeWidth={2.4} />
        {count > 0 && (
          <span className="absolute -bottom-1 -right-1 inline-flex min-w-[20px] items-center justify-center rounded-full bg-white px-1 text-xs font-semibold text-[#7a0e14] shadow">
            {count}
          </span>
        )}
      </button>
    </header>
  );
}
