import Link from "next/link";

export default function Location() {
  return (
    <section id="ubicacion" className="bg-crema">
      <div className="container-p py-12">
        <h2 className="mb-6 text-2xl font-bold text-bordo">Ubicación</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card overflow-hidden">
            <iframe
              title="Mapa Santa Birria"
              src="https://maps.google.com/maps?q=Santa%20Birria%20Santo%20Domingo%20de%20los%20Ts%C3%A1chilas&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="340"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="card p-6">
            <p className="text-sm text-neutral-600">Dirección</p>
            <p className="mt-1 text-lg font-semibold text-carbón">Santa Domingo de los Tsáchilas, Ecuador</p>
            <p className="mt-4 text-sm text-neutral-600">Horarios</p>
            <p className="mt-1 text-carbón">Mar-Dom · 12:00–23:00</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Santa+Birria+Santo+Domingo+de+los+Ts%C3%A1chilas"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Cómo llegar
              </a>
              <a
                href="https://wa.me/593000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
