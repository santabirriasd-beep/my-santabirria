// app/page.jsx
"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuGrid from "@/components/menu/MenuGrid";
import Location from "@/components/Location";
// import CaptureMoment from "@/components/CaptureMoment"; // ← NO en el home

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="historia">
        <About />
      </section>

      <section id="menu">
        <MenuGrid />
      </section>

      {/* Nada de Momentos en la portada */}

      <section id="ubicacion">
        <Location />
      </section>

      {/* Si tienes contacto, footer, etc., déjalos igual */}
    </>
  );
}
