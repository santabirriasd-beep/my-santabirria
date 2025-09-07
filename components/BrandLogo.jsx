"use client";

export default function BrandLogo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Santa Birria"
    >
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7A1124" />
          <stop offset="100%" stopColor="#4B0202" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="240" height="240" rx="40" fill="url(#g)" />
      <circle cx="128" cy="128" r="70" fill="#4B0202" opacity="0.4" />
      <text
        x="50%"
        y="57%"
        textAnchor="middle"
        fontFamily="Arial, ui-sans-serif, system-ui"
        fontSize="96"
        fontWeight="700"
        fill="#FFFFFF"
      >
        SB
      </text>
    </svg>
  );
}
