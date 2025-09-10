export const metadata = {
  metadataBase: new URL("https://my-santabirria.vercel.app"),
  title: {
    default: "Santa Birria | Cocina mexicana creativa",
    template: "%s · Santa Birria",
  },
  description:
    "Santa Birria: birria sagrada, menú simple, directo y delicioso en Ecuador.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Santa Birria | Cocina mexicana creativa",
    description:
      "Santa Birria: birria sagrada, menú simple, directo y delicioso en Ecuador.",
    siteName: "Santa Birria",
    images: [
      {
        url: "/platos/enchiladas.jpg",
        width: 1200,
        height: 630,
        alt: "Santa Birria — cartel iluminado",
      },
    ],
    locale: "es_EC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santa Birria | Cocina mexicana creativa",
    description:
      "Santa Birria: birria sagrada, menú simple, directo y delicioso en Ecuador.",
    images: ["/platos/enchiladas.jpg"]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};
