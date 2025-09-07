import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Momentos | Santa Birria",
  description: "Sube tu foto y dale me gusta a las de la comunidad."
};

export default function MomentosPage() {
  return (
    <main>
      <section className="bg-crema">
        <div className="container-p py-10">
          <h1 className="text-3xl font-extrabold text-bordo">Momentos</h1>
          <p className="mt-2 text-neutral-700">
            Sube tu foto y celebra la birria. Los “me gusta” y tus imágenes se guardan en tu dispositivo.
          </p>
        </div>
      </section>

      <section className="container-p py-10">
        <Gallery />
      </section>
    </main>
  );
}
