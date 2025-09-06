import Image from "next/image";

export default function QRCodes() {
  return (
    <section id="qr" className="bg-blanco">
      <div className="container-p py-12">
        <h2 className="mb-6 text-2xl font-bold text-bordo">Escanéanos</h2>
        <p className="mb-8 text-neutral-600">
          Escanea estos códigos QR para ubicarnos en Google Maps o escribirnos directo por WhatsApp.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="card flex flex-col items-center p-6">
            <Image
              src="/qr_santa_birria_maps.png"
              alt="QR Google Maps Santa Birria"
              width={220}
              height={220}
            />
            <p className="mt-4 font-semibold text-carbón">Google Maps</p>
          </div>

          <div className="card flex flex-col items-center p-6">
            <Image
              src="/qr_santa_birria_whatsapp.png"
              alt="QR WhatsApp Santa Birria"
              width={220}
              height={220}
            />
            <p className="mt-4 font-semibold text-carbón">WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
}
