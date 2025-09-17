import Link from "next/link";

export default function Location() {
  return (
    <section id="ubicacion" className="bg-crema">
      <div className="container-p py-12">
        <h2 className="mb-6 text-2xl font-bold text-bordo">Ubicación</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Mapa embebido */}
          <div className="card overflow-hidden">
            <iframe
              title="Mapa Santa Birria"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.587907826029!2d-79.16102512583883!3d-0.2478192353905729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5470050d4618d%3A0x7da2a3bf5f940e0b!2sSanta%20Birria!5e0!3m2!1ses-419!2sec!4v1725662500000!5m2!1ses-419!2sec"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Información y botones */}
          <div className="card p-6">
            <p className="text-sm text-neutral-600">Dirección</p>
            <p className="mt-1 text-lg font-semibold text-carbón">
              Santa Birria · Santo Domingo de los Tsáchilas, Ecuador
            </p>

            <p className="mt-4 text-sm text-neutral-600">Horarios</p>
            <p className="mt-1 text-carbón">Lun-Dom · 16:00–22:00</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/place/Santa+Birria/@-0.2478192,-79.1610251,17z/data=!3m1!4b1!4m6!3m5!1s0x91d5470050d4618d:0x7da2a3bf5f940e0b!8m2!3d-0.2478246!4d-79.1584448!16s%2Fg%2F11yj7tzqkf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Cómo llegar
              </a>

              <a
                href="https://wa.me/593984755209"
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
