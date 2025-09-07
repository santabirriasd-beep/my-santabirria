"use client";
import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

const LS_ITEMS = "sb_gallery_items_v1";
const LS_LIKES = "sb_gallery_likes_v1";

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [liked, setLiked] = useState({});
  const inputRef = useRef(null);

  useEffect(() => {
    try {
      const a = JSON.parse(localStorage.getItem(LS_ITEMS) || "[]");
      const l = JSON.parse(localStorage.getItem(LS_LIKES) || "{}");
      setItems(a);
      setLiked(l);
      if (!a.length) seed();
    } catch { seed(); }
  }, []);

  function persist(next, nextLiked = liked) {
    setItems(next);
    localStorage.setItem(LS_ITEMS, JSON.stringify(next));
    setLiked(nextLiked);
    localStorage.setItem(LS_LIKES, JSON.stringify(nextLiked));
  }

  function seed() {
    const now = Date.now();
    const seedItems = [
      { id: `seed-1`, src: "/hero.jpg", likes: 3, ts: now - 86400000 },
      { id: `seed-2`, src: "/placeholder.png", likes: 1, ts: now - 43200000 }
    ];
    persist(seedItems);
  }

  async function handleFiles(files) {
    const arr = Array.from(files || []);
    if (!arr.length) return;
    const processed = [];
    for (const f of arr) {
      const dataUrl = await toDataURLResized(f, 1080);
      processed.push({
        id: `u-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        src: dataUrl,
        likes: 0,
        ts: Date.now()
      });
    }
    const next = [...processed, ...items].slice(0, 50);
    persist(next);
    if (inputRef.current) inputRef.current.value = "";
  }

  function like(id) {
    const isLiked = !!liked[id];
    const nextLiked = { ...liked, [id]: !isLiked };
    const nextItems = items.map((it) =>
      it.id === id ? { ...it, likes: Math.max(0, it.likes + (isLiked ? -1 : 1)) } : it
    );
    persist(nextItems, nextLiked);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <label className="btn btn-primary cursor-pointer">
          Subir foto
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>
        <button className="btn btn-ghost" onClick={() => persist([])}>
          Limpiar (solo en este dispositivo)
        </button>
        <p className="text-sm text-neutral-600">
          Las fotos y “me gusta” se guardan solo en tu navegador.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <figure key={it.id} className="relative overflow-hidden rounded-xl2 bg-neutral-100">
            <img
              src={it.src}
              alt="Foto de la comunidad"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white">
              <span className="text-xs opacity-90">{formatDate(it.ts)}</span>
            </figcaption>
            <button
              className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-suave hover:bg-white"
              onClick={() => like(it.id)}
              aria-label="Me gusta"
              title="Me gusta"
            >
              <Heart
                className={liked[it.id] ? "fill-red-500 stroke-red-500" : "stroke-carbón"}
                size={20}
              />
            </button>
            <span className="absolute right-3 top-12 rounded-full bg-white/90 px-2 py-0.5 text-sm font-semibold shadow-suave">
              {it.likes}
            </span>
          </figure>
        ))}
      </div>
    </div>
  );
}

function formatDate(ts) {
  try {
    return new Date(ts).toLocaleDateString("es-EC", { day: "2-digit", month: "short" });
  } catch { return ""; }
}

function toDataURLResized(file, maxSide = 1080, quality = 0.85) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const { width, height } = getFitSize(img.width, img.height, maxSide);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      const data = canvas.toDataURL("image/jpeg", quality);
      URL.revokeObjectURL(url);
      resolve(data);
    };
    img.src = url;
  });
}

function getFitSize(w, h, maxSide) {
  const scale = Math.min(maxSide / Math.max(w, h), 1);
  return { width: Math.round(w * scale), height: Math.round(h * scale) };
}
