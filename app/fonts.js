import { Rye, Montserrat, Open_Sans } from "next/font/google";

export const rye = Rye({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rye"
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-montserrat"
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans"
});
