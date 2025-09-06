"use client";
import { useMemo, useState } from "react";
import MenuFilter from "@/components/MenuFilter";
import ProductCard from "@/components/ProductCard";

export default function MenuGrid({ items }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return items;
    return items.filter((it) =>
      [it.name, it.desc].some((v) => (v || "").toLowerCase().includes(term))
    );
  }, [items, query]);

  return (
    <>
      <MenuFilter items={items} onResult={setQuery} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-6 text-neutral-600">No encontramos resultados para esa búsqueda.</p>
      )}
    </>
  );
}

