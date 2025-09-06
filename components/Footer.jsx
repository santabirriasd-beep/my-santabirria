export default function Footer() {
  return (
    <footer id="contacto" className="mt-16 border-t border-neutral-200 bg-blanco">
      <div className="container-p py-10">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="font-bold text-vino">Santa Birria</p>
            <p className="text-sm text-neutral-600">Cocina mexicana creativa.</p>
          </div>
          <div>
            <p className="font-bold text-carbón">Horario</p>
            <p className="text-sm text-neutral-600">Mar-Dom · 12:00–23:00</p>
          </div>
          <div>
            <p className="font-bold text-carbón">Contacto</p>
            <p className="text-sm text-neutral-600">WhatsApp: +593 000 000 000</p>
          </div>
        </div>
        <p className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} Santa Birria</p>
      </div>
    </footer>
  );
}
