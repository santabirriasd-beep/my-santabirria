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
      const i = prev.findIndex((p) => p.id === item.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + 1 };
        return copy;
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setOpen(true);
  };
  const inc = (id) => setItems((p) => p.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x)));
  const dec = (id) =>
    setItems((p) => p.map((x) => (x.id === id ? { ...x, qty: Math.max(1, x.qty - 1) } : x)));
  const removeItem = (id) => setItems((p) => p.filter((x) => x.id !== id));
  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((a, it) => a + Number(it.price) * it.qty, 0), [items]);

  const phone = "593984755209";

  const orderText = useMemo(() => {
    if (items.length === 0) return "Hola, quiero hacer un pedido.";
    const lines = items.map(
      (it) => `• ${it.name} x${it.qty} — $${(Number(it.price) * it.qty).toFixed(2)}`
    );
    return [
      "La noche pide birria. Este es mi pedido:",
      ...lines,
      `Total: $${total.toFixed(2)}`,
      "¿Tiempo estimado y método de pago?"
    ].join("\n");
  }, [items, total]);

  const whatsappApiUrl = useMemo(
    () => `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(orderText)}`,
    [phone, orderText]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        inc,
        dec,
        removeItem,
        clear,
        total,
        open,
        setOpen,
        openCart: () => setOpen(true),
        closeCart: () => setOpen(false),
        whatsappApiUrl
      }}
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
