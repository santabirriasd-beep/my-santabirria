import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bordo to-vino">
      <div className="container-p py-16 sm:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-blanco sm:text-5xl">
              Cocina mexicana creativa,
              <br />elegante y dinámica
            </h1>
            <p className="mt-4 max-w-prose text-crema/90">
              Santa Birria: sabor auténtico con propuesta moderna. Menú simple, directo y delicioso.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#menu" className="btn btn-primary">Ver menú</Link>
              <Link href="#contacto" className="btn btn-ghost">Ubicación y horarios</Link>
            </div>
          </div>

          <div className="relative h-64 w-full sm:h-80">
            <Image
              src="/hero.jpg"
              alt="Santa Birria"
              fill
              className="rounded-xl2 object-cover shadow-suave"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
