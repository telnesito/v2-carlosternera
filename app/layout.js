import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "v2-carlosternera",
  description: "Desarollador Web FullStack Jr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="logotelne.svg" />
      <body className={`${inter.className} bg-[#0a192f] `}>{children}</body>
    </html>
  );
}
