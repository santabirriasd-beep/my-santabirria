"use client";
import { useEffect, useRef, useState } from "react";

export default function CaptureMoment() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [streamOn, setStreamOn] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [frame, setFrame] = useState(1); // 1,2,3

  useEffect(() => {
    return () => stopCamera();
  }, []);

  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setStreamOn(true);
      }
    } catch (e) {
      alert("No pudimos acceder a la cámara. Puedes subir una foto desde tu galería.");
    }
  }

  function stopCamera() {
    const v = videoRef.current;
    if (v && v.srcObject) {
      v.srcObject.getTracks().forEach((t) => t.stop());
      v.srcObject = null;
    }
    setStreamOn(false);
  }

  function drawFrame(ctx, W, H) {
    // paleta
    const bordo = "#4B0202";
    const vino = "#7A1124";
    const blanco = "#FFFFFF";

    if (frame === 1) {
      // Borde redondeado con franja inferior
      ctx.lineWidth = 24;
      ctx.strokeStyle = vino;
      ctx.strokeRect(12, 12, W - 24, H - 24);

      const grd = ctx.createLinearGradient(0, H - 220, 0, H);
      grd.addColorStop(0, "rgba(74, 2, 2, 0)");
      grd.addColorStop(1, "rgba(74, 2, 2, 0.85)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, H - 220, W, 220);

      ctx.fillStyle = blanco;
      ctx.font = "bold 72px Rye, serif";
      ctx.fillText("SANTABIRRIA", 48, H - 90);

      ctx.font = "italic 30px 'Open Sans', system-ui";
      ctx.fillText("Aquí la birria es sagrada", 48, H - 42);
    }

    if (frame === 2) {
      // Cinta diagonal superior izquierda
      ctx.fillStyle = vino;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(330, 0);
      ctx.lineTo(0, 200);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = blanco;
      ctx.save();
      ctx.translate(32, 72);
      ctx.rotate(-Math.atan2(200, 330));
      ctx.font = "bold 52px Rye, serif";
      ctx.fillText("Santa Birria", 0, 0);
      ctx.restore();

      // Pie con hashtag
      ctx.fillStyle = bordo;
      ctx.fillRect(0, H - 80, W, 80);
      ctx.fillStyle = blanco;
      ctx.font = "600 32px Montserrat, system-ui";
      ctx.fillText("#SantaBirria", 48, H - 28);
    }

    if (frame === 3) {
      // Marco grueso y sello
      ctx.lineWidth = 60;
      ctx.strokeStyle = bordo;
      ctx.strokeRect(30, 30, W - 60, H - 60);

      ctx.fillStyle = "rgba(122,17,36,0.85)";
      ctx.fillRect(W - 360, H - 140, 320, 100);

      ctx.fillStyle = blanco;
      ctx.font = "bold 44px Rye, serif";
      ctx.fillText("SB • Santa Birria", W - 340, H - 78);
      ctx.font = "28px 'Open Sans', system-ui";
      ctx.fillText("Birria, fuego y consomé", W - 340, H - 44);
    }

    // Fecha pequeña
    const d = new Date();
    const dd = d.toLocaleDateString("es-EC", { day: "2-digit", month: "short", year: "numeric" });
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.font = "600 22px Montserrat, system-ui";
    ctx.fillText(dd, 48, 64);
  }

  function drawSourceToCanvas(source) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = 1080, H = 1350; // formato social vertical
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");

    // Fondo
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, W, H);

    // Pintar imagen/video con "cover"
    const sw = source.videoWidth || source.naturalWidth || 0;
    const sh = source.videoHeight || source.naturalHeight || 0;
    if (sw && sh) {
      const scale = Math.max(W / sw, H / sh);
      const dw = sw * scale;
      const dh = sh * scale;
      const dx = (W - dw) / 2;
      const dy = (H - dh) / 2;
      ctx.drawImage(source, dx, dy, dw, dh);
    }

    drawFrame(ctx, W, H);
  }

  function takePhoto() {
    if (!videoRef.current) return;
    drawSourceToCanvas(videoRef.current);
    const url = canvasRef.current.toDataURL("image/png");
    setPhotoURL(url);
  }

  function onFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      drawSourceToCanvas(img);
      setPhotoURL(canvasRef.current.toDataURL("image/png"));
    };
    img.src = URL.createObjectURL(file);
  }

  async function shareOrDownload() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const blob = await new Promise((res) => canvas.toBlob(res, "image/png"));
    const file = new File([blob], "santabirria-momento.png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: "Santa Birria",
          text: "Capturé mi momento en Santa Birria #SantaBirria"
        });
        return;
      } catch {}
    }
    // Fallback: descargar
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = "santabirria-momento.png";
    a.click();
  }

  return (
    <div className="card p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-xl2 bg-neutral-100">
            {!photoURL ? (
              streamOn ? (
                <video ref={videoRef} className="h-full w-full object-cover" muted playsInline />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-neutral-500">
                  Activa la cámara o sube una foto
                </div>
              )
            ) : (
              <img src={photoURL} alt="Tu momento" className="h-full w-full object-cover" />
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {!streamOn ? (
              <button className="btn btn-primary" onClick={startCamera}>Activar cámara</button>
            ) : (
              <button className="btn btn-ghost" onClick={stopCamera}>Apagar cámara</button>
            )}
            <button className="btn" onClick={takePhoto} disabled={!streamOn}>Tomar foto</button>
            <label className="btn btn-ghost cursor-pointer">
              Subir foto
              <input type="file" accept="image/*" className="hidden" onChange={onFile} />
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <canvas ref={canvasRef} className="w-full overflow-hidden rounded-xl2 bg-black" />

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-neutral-600">Marco:</span>
            <button
              className={`rounded-xl2 border px-3 py-1 ${frame === 1 ? "border-vino" : "border-neutral-300"}`}
              onClick={() => setFrame(1)}
            >
              Clásico
            </button>
            <button
              className={`rounded-xl2 border px-3 py-1 ${frame === 2 ? "border-vino" : "border-neutral-300"}`}
              onClick={() => setFrame(2)}
            >
              Cinta
            </button>
            <button
              className={`rounded-xl2 border px-3 py-1 ${frame === 3 ? "border-vino" : "border-neutral-300"}`}
              onClick={() => setFrame(3)}
            >
              Sello
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="btn btn-primary" onClick={shareOrDownload}>Compartir / Descargar</button>
            <a
              href="https://wa.me/593984755209?text=¡Acabo%20de%20capturar%20mi%20momento%20en%20Santa%20Birria!%20Adjunto%20la%20foto%20😄"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Enviar por WhatsApp
            </a>
          </div>

          <p className="text-sm text-neutral-600">
            Consejo: en móvil usa “Compartir / Descargar” y elige WhatsApp o Instagram. En algunos
            navegadores no es posible adjuntar la imagen automáticamente a WhatsApp web; en ese caso
            descárgala y súbela desde tu galería.
          </p>
        </div>
      </div>
    </div>
  );
}
