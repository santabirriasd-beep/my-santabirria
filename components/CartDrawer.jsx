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
    <aside className={`fixed inset-0 ${open ? "" : "pointer-events-none"} z-[80]`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={closeCart}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between border-b p-4">
            <h3 className="text-xl font-bold">Tu pedido</h3>
            <button onClick={closeCart} className="text-neutral-600">Cerrar</button>
          </header>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-neutral-600">Aún no has agregado productos.</p>
            ) : (
              items.map((it) => (
                <div key={it.id} className="mb-3 flex items-center gap-3 rounded-xl border p-3">
                  <img
                    src={it.image || "/placeholder.png"}
                    alt={it.name}
                    className="h-14 w-14 flex-shrink-0 rounded-lg object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/placeholder.png";
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 classNa
