"use client";
import { useCart } from "./cart/CartContext";

export default function CartDrawer() {
  const {
    items, removeItem, inc, dec, clear, total,
    open, closeCart, orderText, whatsappCheckoutUrl, whatsappSchemeUrl
  } = useCart();

  const isMobile =
    typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const waLink = isMobile ? whatsappSchemeUrl : whatsappCheckoutUrl;

  return (
    <aside
      className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"} `}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={closeCart}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b p-4">
          <h3 className="text-xl font-bold text-bordo">Tu pedido</h3>
          <button onClick={closeCart} className="text-neutral-600">Cerrar</button>
        </header>

        <div className="flex h-[calc(100%-200px)] flex-col overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-neutral-600">Aún no has agregado productos.</p>
          ) : (
            items.map((it) => (
              <div key={it.id} className="mb-3 flex items-center gap-3 rounded-xl2 border p-3">
                <img
                  src={it.image || "/placeholder.png"}
                  alt={it.name}
                  className="h-14 w-14 rounded-xl2 object-cover"
                  onError={(e) => { e.currentTarget.src = "/placeholder.png"; }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{it.name}</h4>
                    <span className="font-bold">${(parseFloat(it.price) * it.qty).toFixed(2)}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="rounded border px-2" onClick={() => dec(it.id)}>-</button>
                    <span className="w-6 text-center">{it.qty}</span>
                    <button className="rounded border px-2" onClick={() => inc(it.id)}>+</button>
                    <button className="ml-auto text-sm text-vino underline" onClick={() => removeItem(it.id)}>
                      quitar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <footer className="border-t p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-neutral-700">Total</span>
            <strong className="text-lg text-bordo">${total.toFixed(2)}</strong>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary w-full ${items.length === 0 ? "pointer-events-none opacity-60" : ""}`}
          >
            Enviar por WhatsApp
          </a>

          <button
            className="btn btn-ghost mt-2 w-full"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(orderText);
                alert("Pedido copiado. Si WhatsApp no abre, pégalo en tu chat.");
              } catch {
                alert("Copia no disponible en este navegador.");
              }
            }}
          >
            Copiar pedido
          </button>

          <button className="mt-2 w-full text-sm text-neutral-500 underline" onClick={clear}>
            Vaciar carrito
          </button>
        </footer>
      </div>
    </aside>
  );
}
