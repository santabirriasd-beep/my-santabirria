"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/#hero" prefetch={false} className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-vino text-white font-bold">SB</span>
          <span className="sr-only">Santa Birria</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-neutral-700">
          <Link href="/#momentos" prefetch={false} className="hover:text-vino">Momentos</Link>
          <Link href="/#historia" prefetch={false} className="hover:text-vino">Historia</Link>
          <Link href="/#menu" prefetch={false} className="hover:text-vino">Menú</Link>
          <Link href="/#combos" prefetch={false} className="hover:text-vino">Combos</Link>
          <Link href="/#ubicacion" prefetch={false} className="hover:text-vino">Ubicación</Link>
          <Link href="/#contacto" prefetch={false} className="hover:text-vino">Contacto</Link>
        </nav>

        <Link
          href="/#carrito"
          prefetch={false}
          aria-label="Carrito"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-vino text-white hover:opacity-90"
        >
          {/* ícono carrito */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m2-9l2 9m8-9l2 9m-2-9H7" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

