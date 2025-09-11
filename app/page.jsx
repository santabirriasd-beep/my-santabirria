import Hero from "@/components/Hero";
import CaptureMoment from "@/components/CaptureMoment";
import About from "@/components/About";
import MenuGrid from "@/components/menu/MenuGrid";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      {/* Ajuste para que el scroll pare debajo del navbar fijo */}
      <style dangerouslySetInnerHTML={{__html:`
        html{scroll-behavior:smooth}
        section[id]{scroll-margin-top:90px}
      `}} />

      <section id="hero">
        <Hero />
      </section>

      <section id="momentos">
        <CaptureMoment />
      </section>

      <section id="historia">
        <About />
      </section>

      <section id="menu">
        <MenuGrid />
      </section>

      {/* Si no tienes un componente de combos separado,
         dejamos el ancla para que el link no de error. */}
      <section id="combos">
        {/* Opcional: aquí podrías renderizar un grid filtrado a combos si lo tienes */}
      </section>

      <section id="ubicacion">
        <Location />
      </section>

      <section id="contacto">
        <Footer />
      </section>

      {/* Punto de anclaje para abrir/ir al carrito si lo necesitas */}
      <div id="carrito" />
    </main>
  );
}
