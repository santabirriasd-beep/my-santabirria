import { Instagram, Phone, MessageCircle } from "lucide-react";

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
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="https://wa.me/59398 475 5209"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-vino"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/santabirriasd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-vino"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href="https://www.tiktok.com/@santabirriasd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-vino"
              >
                <Phone size={16} /> TikTok
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} Santa Birria
        </p>
      </div>
    </footer>
  );
}
