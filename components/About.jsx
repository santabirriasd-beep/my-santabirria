export default function About() {
  return (
    <section id="historia" className="bg-crema">
      <div className="container-p py-12">
        <h2 className="mb-6 text-2xl font-bold text-bordo">Nuestra historia</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="card p-6">
            <p className="text-neutral-700">
              Santa Birria nace de una receta familiar y muchas horas de cocción lenta.
              Empezamos con la idea de respetar el sabor tradicional de la birria y
              llevarlo a un formato moderno, simple y directo para todo público.
            </p>
            <p className="mt-3 text-neutral-700">
              Aquí la birria es sagrada: cuidamos el consomé, los cortes y cada tortilla.
              Nuestro equipo vive la hospitalidad mexicana con un servicio cálido y cercano.
            </p>
          </article>

          <div className="grid gap-6">
            <article className="card p-6">
              <h3 className="text-lg font-bold text-bordo">Misión</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-700">
                <li>Honrar la birria con ingredientes frescos y técnicas auténticas.</li>
                <li>Ofrecer una experiencia sencilla, elegante y muy sabrosa.</li>
                <li>Servir con calidez y respeto a nuestra comunidad.</li>
              </ul>
            </article>

            <article className="card p-6">
              <h3 className="text-lg font-bold text-bordo">Visión</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-700">
                <li>Ser referente de birria creativa en Ecuador.</li>
                <li>Crecimiento sostenible sin perder la esencia casera.</li>
                <li>Convertir cada visita en un antojo de regreso.</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
