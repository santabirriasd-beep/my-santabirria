"use client";
import Image from "next/image";
import { useCart } from "./cart/CartContext";
import { X, Plus, Minus, Trash2, ShoppingCart } from "lucide-react";

export default function CartDrawer() {
  const { items, inc, dec, removeItem, clear, total, open, closeCart, whatsappCheckoutUrl } = useCart();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[90] bg-black/40"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[100] h-full w-full max-w-md transform bg-blanco shadow-suave transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 p-4">
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} className="text-vino" />
            <h3 className="text-lg font-bold text-bordo">Tu pedido</h3>
          </div>
          <button aria-label="Cerrar" onClick={closeCart}>
            <X />
          </button>
        </div>

        <div className="flex h-[calc(100%-168px)] flex-col overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-neutral-600">Tu carrito está vacío.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="flex items-center gap-3">
                  <div className="h-16 w-16 overflow-hidden rounded-xl2 bg-neutral-100">
                    {/* usa Image si subes a /public; si son URLs externas, deja img */}
                    <img
                      src={it.image || "/placeholder.png"}
                      alt={it.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-carbón">{it.name}</p>
                    <p className="text-sm text-neutral-600">${parseFloat(it.price).toFixed(2)}</p>
                    <div className="mt-2 inline-flex items-center gap-2">
                      <button className="rounded-xl2 border px-2 py-1" onClick={() => dec(it.id)}>
                        <Minus size={16} />
                      </button>
                      <span className="w-6 text-center">{it.qty}</span>
                      <button className="rounded-xl2 border px-2 py-1" onClick={() => inc(it.id)}>
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="font-semibold text-carbón">
                      ${(parseFloat(it.price) * it.qty).toFixed(2)}
                    </p>
                    <button
                      className="mt-2 text-sm text-vino hover:opacity-80"
                      onClick={() => removeItem(it.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-neutral-200 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-neutral-600">Total</span>
            <span className="text-xl font-extrabold text-bordo">${total.toFixed(2)}</span>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={whatsappCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full text-center"
            >
              Pedir por WhatsApp
            </a>
            <button className="btn btn-ghost w-full" onClick={clear}>
              Vaciar carrito
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
