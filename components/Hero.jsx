import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#4b070c] via-[#5c0a11] to-[#2b0204] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            SANTABIRRIA
          </h1>
          <p className="text-base text-[#f6d9d9]/90 md:text-lg">
            Aquí la birria es sagrada; el hambre es pecado.
          </p>
          <div className="flex gap-3">
            <a
              href="#menu"
              className="rounded-xl bg-[#faf4f4] px-5 py-3 font-semibold text-[#7a0e14] shadow hover:shadow-md"
            >
              Ver carta completa
            </a>
            <a
              href="#ubicacion"
              className="rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 hover:bg-white/15"
            >
              Ubicación y horarios
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
          <Image
            src="/hero.jpg"
            alt="Santa Birria"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
