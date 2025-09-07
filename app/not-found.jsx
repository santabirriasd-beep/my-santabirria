export default function NotFound() {
  return (
    <section className="container-p py-16">
      <h1 className="text-3xl font-bold text-bordo">Página no encontrada</h1>
      <p className="mt-2 text-neutral-600">La ruta que buscas no existe.</p>
      <a href="/" className="btn btn-primary mt-6">Volver al inicio</a>
    </section>
  );
}
