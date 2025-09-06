"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("sb_cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("sb_cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (item) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setOpen(true);
  };

  const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id));
  const inc = (id) => setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  const dec = (id) =>
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p)).filter((p) => p.qty > 0)
    );

  const clear = () => setItems([]);
  const total = useMemo(() => items.reduce((acc, it) => acc + parseFloat(it.price) * it.qty, 0), [items]);

  const toggle = () => setOpen((v) => !v);
  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  const whatsappCheckoutUrl = useMemo(() => {
    const phone = "593984755209";
    const lines = items.map(
      (it) => `• ${it.name} x${it.qty} — $${(parseFloat(it.price) * it.qty).toFixed(2)}`
    );
    const text = ["Hola! Quiero hacer este pedido:", ...lines, `Total: $${total.toFixed(2)}`].join("\n");
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, [items, total]);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, inc, dec, clear, total, open, toggle, openCart, closeCart, whatsappCheckoutUrl }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
