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
    setItems((p) => p.map((x) => (x.id === id ? { ...x, qty: Math.max(1
