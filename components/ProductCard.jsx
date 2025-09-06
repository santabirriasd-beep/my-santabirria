"use client";
import { useCart } from "./cart/CartContext";

export default function ProductCard({ item }) {
  const { addItem } = useCart();

  return (
    <article className="card p-4">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl2 bg-neutral-100">
        <img
          src={item.image || "/placeholder.png"}
          alt={item.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-carbón">{item.name}</h3>
          <p className="text-sm text-neutral-600">{item.desc}</p>
        </div>
        <span className="whitespace-nowrap rounded-xl2 bg-vino px-3 py-1 text-sm font-bold text-blanco">
          ${parseFloat(item.price).toFixed(2)}
        </span>
      </div>
      <button
        className="btn btn-primary mt-4 w-full"
        onClick={() =>
          addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image
          })
        }
      >
        Agregar al carrito
      </button>
    </article>
  );
}

