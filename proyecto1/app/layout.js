import { Acme } from "next/font/google";
import "./estilos.css";

const typography = Acme({ subsets: ["latin"], weight: "400", font: "normal" });

export const metadata = {
  title: "CyberTech Chilean",
  description: "generando una aplicacion web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={typography.className}>{children}</body>
    </html>
  );
}
