import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bordo to-vino">
      <div className="container-p py-16 sm:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="font-display uppercase tracking-wide text-5xl font-extrabold leading-tight text-blanco sm:text-6xl">
              SANTABIRRIA
            </h1>
            <p className="mt-4 max-w-prose text-crema/90 font-tagline italic">
              Aquí la birria es sagrada; el hambre es pecado.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/menu" className="btn btn-primary">Ver carta completa</Link>
              <Link href="#ubicacion" className="btn btn-ghost">Ubicación y horarios</Link>
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
