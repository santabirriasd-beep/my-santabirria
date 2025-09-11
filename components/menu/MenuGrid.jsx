// components/menu/MenuGrid.jsx
"use client";
import menuData from "@/data/menu";
import { useCart } from "@/components/cart/CartContext";

function Section({ title, items }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="py-10">
      <h2 className="mb-6 text-2xl font-extrabold text-[#7a0e14]">{title}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Card key={it.id} item={it} />
        ))}
      </div>
    </section>
  );
}

function Card({ item }) {
  const { addItem } = useCart();
  const isSoldOut = item.available === false;

  const onAdd = () => {
    if (isSoldOut) return;
    addItem({ id: item.id, name: item.name, price: item.price, image: item.image });
  };

  return (
    <div className={`overflow-hidden rounded-2xl border shadow-sm ${isSoldOut ? "opacity-70" : ""}`}>
      <div className="relative">
        <img
          src={item.image || "/placeholder.png"}
          alt={item.name}
          className="h-44 w-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/placeholder.png";
          }}
        />
        {isSoldOut && (
          <span className="absolute left-2 top-2 rounded-full bg-black/80 px-2 py-1 text-xs font-semibold text-white">
            Agotado
          </span>
        )}
      </div>

      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="whitespace-nowrap font-bold text-[#7a0e14]">
            ${Number(item.price).toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-neutral-600">{item.desc}</p>
        <button
          onClick={onAdd}
          disabled={isSoldOut}
          className={`mt-3 w-full rounded-full px-4 py-2 text-white transition ${
            isSoldOut
              ? "cursor-not-allowed bg-neutral-400"
              : "bg-[#7a0e14] hover:bg-[#93121a]"
          }`}
        >
          {isSoldOut ? "Fuera de temporada" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
}

export default function MenuGrid() {
  return (
    <div>
      <Section title="Destacados" items={menuData.destacados} />
      <Section title="Platos de temporada" items={menuData.temporada} />
      <Section title="Combos" items={menuData.combos} />
      <Section title="Bebidas" items={menuData.bebidas} />
    </div>
  );
}
