"use client";
import { useState } from "react";
import { useCart } from "./cart/CartContext";

export default function CartDrawer() {
  const {
    items,
    removeItem,
    inc,
    dec,
    clear,
    total,
    open,
    closeCart,
    whatsappApiUrl
  } = useCart();

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const txt =
        items.map((it) => `${it.name} x${it.qty}`).join(", ") +
        ` | Total: $${total.toFixed(2)}`;
      await navigator.clipboard.writeText(txt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <aside className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between border-b p-4">
            <h3 className="text-xl font-bold text-bordo">Tu pedido</h3>
            <button onClick={closeCart} className="text-neutral-600">
              Cerrar
            </button>
          </header>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-neutral-600">Aún no has agregado productos.</p>
            ) : (
              items.map((it) => (
                <div key={it.id} className="mb-3 flex items-center gap-3 rounded-xl2 border p-3">
                  <img
                    src={it.image || "/placeholder.png"}
                    alt={it.name}
                    className="h-14 w-14 flex-shrink-0 rounded-xl2 object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/placeholder.png";
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="truncate font-semibold">{it.name}</h4>
                      <span className="whitespace-nowrap font-bold">
                        ${(Number(it.price) * it.qty).toFixed(2)}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <button className="rounded border px-2" onClick={() => dec(it.id)}>
                        -
                      </button>
                      <span className="w-6 text-center">{it.qty}</span>
                      <button className="rounded border px-2" onClick={() => inc(it.id)}>
                        +
                      </button>
                      <button
                        className="ml-auto text-sm text-vino underline"
                        onClick={() => removeItem(it.id)}
                      >
                        quitar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer sticky */}
          <footer className="sticky bottom-0 border-t bg-white p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-neutral-700">Total</span>
              <strong className="text-lg text-bordo">${total.toFixed(2)}</strong>
            </div>

            {/* Enlace directo, sin JS = sin about:blank */}
            <a
              href={whatsappApiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary w-full ${
                items.length === 0 ? "pointer-events-none opacity-60" : ""
              }`}
            >
              Enviar por WhatsApp
            </a>
            {/* Si en TU navegador sigue abriendo en blanco, cámbialo a target="_self" */}
            {/* <a href={whatsappApiUrl} target="_self" className="btn btn-primary w-full">Enviar por WhatsApp</a> */}

            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <button
                className="btn btn-ghost w-full"
                onClick={handleCopy}
                disabled={items.length === 0}
              >
                {copied ? "Copiado ✓" : "Copiar pedido"}
              </button>
              <button
                className="w-full text-sm text-neutral-500 underline"
                onClick={clear}
                disabled={items.length === 0}
              >
                Vaciar carrito
              </button>
            </div>
          </footer>
        </div>
      </div>
    </aside>
  );
}
