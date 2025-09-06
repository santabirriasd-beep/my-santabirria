"use client";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import menuData from "@/data/menu";
import Link from "next/link";
import MenuFilter from "@/components/MenuFilter";

export const metadata = {
  title: "Carta | Santa Birria",
  description: "Carta completa de Santa Birria con fotos y precios"
};

export default function MenuPage() {
  const [query, setQuery] = useState("");

  const all = useMemo(() => {
    const join = [...menuData.destacados, ...menuData.combos, ...menuData.bebidas];
    const term = query.trim().toLowerCase();
    if (!term) return join;
    return join.filter((it) =>
      [it.name, it.desc].some((v) => (v || "").toLowerCase().includes(term))
    );
  }, [query]);

  return (
    <main>
      <section className="bg-crema">
        <div className="container-p py-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-extrabold text-bordo">Carta</h1>
            <Link href="/" className="text-vino underline underline-offset-4">Inicio</Link>
          </div>
          <p className="mt-2 text-neutral-700">Explora todos nuestros platos con fotos y precios.</p>
          <div className="mt-6">
            <MenuFilter items={all} onResult={setQuery} />
          </div>
        </div>
      </section>

      <section className="container-p py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        {all.length === 0 && (
          <p className="mt-6 text-neutral-600">No encontramos resultados para esa búsqueda.</p>
        )}
      </section>
    </main>
  );
}
