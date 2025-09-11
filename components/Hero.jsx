"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate bg-gradient-to-br from-[#4d0b0f] via-[#640f14] to-[#2a0608]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Altura más compacta y menos blancos */}
        <div className="grid items-center gap-8 lg:grid-cols-2 py-10 sm:py-14 lg:py-12 min-h-[52vh]">
          {/* Texto */}
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              SANTABIRRIA
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-90">
              Aquí la birria es sagrada; el hambre es pecado.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="rounded-full bg-white text-[#5b0d12] font-semibold px-5 py-3 shadow-md hover:shadow-lg transition"
              >
                Ver carta completa
              </Link>
              <Link
                href="/ubicacion"
                className="rounded-full border border-white/50 text-white px-5 py-3 hover:bg-white/10 transition"
              >
                Ubicación y horarios
              </Link>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <img
                src="/hero.jpg"
                alt="Letrero de Santa Birria"
                className="h-72 sm:h-80 lg:h-[22rem] w-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/placeholder.png";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Suavizado inferior, no ocupa espacio */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/10 to-transparent" />
    </section>
  );
}
