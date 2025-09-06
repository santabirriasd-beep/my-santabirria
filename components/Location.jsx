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
              referrerPolicy="no-referr

