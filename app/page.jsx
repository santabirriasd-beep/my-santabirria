import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import menuData from "@/data/menu";
import Location from "@/components/Location";
import QRCodes from "@/components/QRCodes";

export default function Page() {
  return (
    <main>
      <Hero />
      <section id="menu" className="container-p py-12">
        <h2 className="mb-6 text-2xl font-bold text-bordo">Menú destacado</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuData.destacados.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <section id="combos" className="container-p py-12">
        <h2 className="mb-6 text-2xl font-bold text-bordo">Combos</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuData.combos.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <section className="container-p py-12">
        <h2 className="mb-6 text-2xl font-bold text-bordo">Bebidas</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuData.bebidas.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <Location />
      <QRCodes />
    </main>
  );
}
