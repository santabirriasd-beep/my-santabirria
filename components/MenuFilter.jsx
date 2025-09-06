"use client";
import { useMemo, useState } from "react";

export default function MenuFilter({ items, onResult }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items;
    return items.filter((it) =>
      [it.name, it.desc].some((v) => (v || "").toLowerCase().includes(term))
    );
  }, [q, items]);

  return (
    <div className="mb-6">
      <input
        value={q}
        onChange={(e) => onResult ? (setQ(e.target.value), onResult(e.target.value)) : setQ(e.target.value)}
        placeholder="Buscar platos (ej. birria, burrito, enchilada)"
        className="w-full rounded-xl2 border border-neutral-300 bg-white px-4 py-3 outline-none ring-0 focus:border-vino"
        aria-label="Buscar en la carta"
      />
    </div>
  );
}
