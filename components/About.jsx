export default function About() {
  return (
    <section id="historia" className="bg-crema">
      <div className="container-p py-12">
        <h2 className="mb-6 text-2xl font-bold text-bordo">Nuestra historia</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="card p-6">
            <p className="text-neutral-700">
              Santa Birria nace de una receta familiar y muchas horas de cocción lenta.
              Respetamos el sabor tradicional y lo llevamos a un formato moderno, simple y directo.
            </p>
          </article>

          <div className="grid gap-6">
            <article className="card p-6">
              <h3 className="text-lg font-bold text-bordo">Misión</h3>
              <p className="mt-2 text-neutral-700">
                Ofrecer una experiencia auténtica con la birria como eje, uniendo tradición mexicana,
                innovación y servicio cálido para conectar a nivel sensorial y cultural.
              </p>
            </article>

            <article className="card p-6">
              <h3 className="text-lg font-bold text-bordo">Visión</h3>
              <p className="mt-2 text-neutral-700">
                Ser referente nacional de gastronomía mexicana urbana y crecer de forma sostenible,
                manteniendo identidad sólida, calidad constante y coherencia en cada punto de venta.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
