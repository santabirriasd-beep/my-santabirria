export const metadata = {
  title: "Carta | Santa Birria",
  description: "Carta completa de Santa Birria con fotos y precios"
};

import Link from "next/link";
import menuData from "@/data/menu";
import MenuGrid from "@/components/menu/MenuGrid";

export default function MenuPage() {
  const all = [...menuData.destacados, ...menuData.combos, ...menuData.bebidas];
  return (
    <main>
      <section className="bg-crema">
        <div className="container-p py-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-extrabold text-bordo">Carta</h1>
            <Link href="/" className="text-vino underline underline-offset-4">Inicio</Link>
          </div>
          <p className="mt-2 text-neutral-700">Explora todos nuestros platos con fotos y precios.</p>
        </div>
      </section>
      <section className="container-p py-10">
        <MenuGrid items={all} />
      </section>
    </main>
  );
}
