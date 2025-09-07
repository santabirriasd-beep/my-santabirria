"use client";
import { useCart } from "./cart/CartContext";

export default function ProductCard({ item }) {
  const { addItem } = useCart();
  const src = item.image || "/placeholder.png";

  return (
    <div className="rounded-2xl bg-white p-4 shadow-suave">
      <div className="mb-3 aspect-[4/3] w-full overflow-hidden rounded-xl2 bg-neutral-100">
        <img
          src={src}
          alt={item.name}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/placeholder.png";
          }}
        />
      </div>
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-carbón">{item.name}</h3>
        <span className="rounded-full bg-vino px-3 py-1 text-sm font-bold text-white">
          ${Number(item.price).toFixed(2)}
        </span>
      </div>
      <p className="mt-1 text-neutral-600">{item.desc}</p>
      <button className="btn btn-primary mt-4 w-full" onClick={() => addItem(item)}>
        Agregar al carrito
      </button>
    </div>
  );
}
