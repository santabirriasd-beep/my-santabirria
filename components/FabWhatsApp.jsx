"use client";

export default function FabWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 z-[70] flex flex-col gap-3">
      <a
        href="https://api.whatsapp.com/send?phone=593984755209"
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 w-12 rounded-full bg-green-500 text-white grid place-items-center shadow-lg"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M20.52 3.48A11.77 11.77 0 0 0 12.06 0C5.49 0 .16 5.33.16 11.9c0 2.09.55 4.15 1.61 5.96L0 24l6.29-1.73a11.85 11.85 0 0 0 5.77 1.5h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.39ZM12.06 21.3h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.73 1.03 1-3.63-.23-.37a9.33 9.33 0 0 1-1.42-4.9c0-5.18 4.22-9.4 9.41-9.4 2.51 0 4.88.98 6.66 2.76a9.35 9.35 0 0 1 2.75 6.64c0 5.19-4.23 9.39-9.41 9.39Zm5.39-7.07c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.63.07-.3-.15-1.24-.46-2.37-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.48.71.3 1.26.48 1.69.62.71.23 1.36.2 1.88.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.29.18-1.41-.07-.12-.27-.2-.57-.35Z"/></svg>
      </a>

      <a
        href="https://www.instagram.com/santabirriasd?utm_source=ig_web_button_share_sheet&igsh=MTM4ZjdrdDF1enVmOQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 w-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white grid place-items-center shadow-lg"
        aria-label="Instagram"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/></svg>
      </a>

      <a
        href="https://www.tiktok.com/@santabirriasd?is_from_webapp=1&sender_device=pc"
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 w-12 rounded-full bg-black text-white grid place-items-center shadow-lg"
        aria-label="TikTok"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M16 3a5.5 5.5 0 0 0 4 1.7V8a8.5 8.5 0 0 1-4-1.1V14a6 6 0 1 1-6-6c.34 0 .68.03 1 .1V10a3.5 3.5 0 1 0 2 3.15V3h3Z"/></svg>
      </a>
    </div>
  );
}
