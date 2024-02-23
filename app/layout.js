import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "v2-carlosternera",
  description: "Desarollador Web FullStack Jr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a192f] `}>{children}</body>
    </html>
  );
}
