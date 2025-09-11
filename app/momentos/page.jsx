// app/momentos/page.jsx
"use client";
import dynamic from "next/dynamic";

const CaptureMoment = dynamic(
  () => import("@/components/CaptureMoment"),
  { ssr: false }
);

export default function MomentosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-[#7a0e14]">Momentos</h1>
      <CaptureMoment />
    </main>
  );
}
