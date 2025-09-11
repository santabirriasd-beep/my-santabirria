"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-[#5e0d13] to-[#7b0f17] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            SANTABIRRIA
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/90">
            Aquí la birria es sagrada; el hambre es pecado.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#menu"
              prefetch={false}
              className="inline-flex items-center rounded-xl bg-white text-vino px-5 py-3 font-semibold shadow hover:shadow-md"
            >
              Ver carta completa
            </Link>
            <Link
              href="/#ubicacion"
              prefetch={false}
              className="inline-flex items-center rounded-xl border border-white/30 px-5 py-3 font-semibold hover:bg-white/10"
            >
              Ubicación y horarios
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
          <Image
            src="/hero.jpg"
            alt="Rótulo de Santa Birria"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
