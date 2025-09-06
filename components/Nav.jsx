"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-blanco/90 backdrop-blur">
      <div className="container-p flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Santa Birria" width={36} height={36} />
          <span className="font-display text-xl font-bold text-vino">Santa Birria</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/menu" className="text-carbón hover:text-vino">Carta</Link>
          <a href="#menu" className="text-carbón hover:text-vino">Menú</a>
          <a href="#combos" className="text-carbón hover:text-vino">Combos</a>
          <a href="#ubicacion" className="text-carbón hover:text-vino">Ubicación</a>
          <a href="#contacto" className="text-carbón hover:text-vino">Contacto</a>
        </nav>
        <button aria-label="Abrir menú" className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
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
