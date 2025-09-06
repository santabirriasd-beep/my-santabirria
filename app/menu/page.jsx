import ProductCard from "@/components/ProductCard";
import menuData from "@/data/menu";
import Link from "next/link";

export const metadata = {
  title: "Carta | Santa Birria",
  description: "Carta completa de Santa Birria con fotos y precios"
};

export default function MenuPage() {
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
        <h2 className="mb-6 text-2xl font-bold text-bordo">Destacados</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuData.destacados.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="container-p py-10">
        <h2 className="mb-6 text-2xl font-bold text-bordo">Combos</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuData.combos.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="container-p py-10">
        <h2 className="mb-6 text-2xl font-bold text-bordo">Bebidas</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuData.bebidas.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

