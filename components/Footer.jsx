// components/Footer.jsx
import { MessageCircle, Instagram, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-crema">
      <div id="contacto" className="container-p grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold text-vino">Santa Birria</h3>
          <p className="mt-2 text-neutral-700">Cocina mexicana creativa.</p>
        </div>

        <div>
          <h4 className="font-semibold text-bordo">Horario</h4>
          <p className="mt-2 text-neutral-700">Mar-Dom · 12:00–23:00</p>
        </div>

        <div>
          <h4 className="font-semibold text-bordo">Contacto</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=593984755209"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-vino"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-vino"
              >
                <Instagram size={16} />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-vino"
              >
                <Music2 size={16} />
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-p border-t py-6 text-sm text-neutral-500">
        © 2025 Santa Birria
      </div>
    </footer>
  );
}
