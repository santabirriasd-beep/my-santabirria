import CaptureMoment from "@/components/CaptureMoment";

export const metadata = {
  title: "Captura tu momento | Santa Birria",
  description: "Toma una foto, aplícale un marco de Santa Birria y compártela."
};

export default function MomentosPage() {
  return (
    <main>
      <section className="bg-crema">
        <div className="container-p py-10">
          <h1 className="text-3xl font-extrabold text-bordo">Captura tu momento</h1>
          <p className="mt-2 text-neutral-700">
            Activa la cámara o sube una foto, elige un marco y comparte tu recuerdo.
          </p>
        </div>
      </section>

      <section className="container-p py-10">
        <CaptureMoment />
      </section>
    </main>
  );
}
