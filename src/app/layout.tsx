import { Analytics } from "@vercel/analytics/next";
import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import PageTransition from "@/components/PageTransition";
import FloatingCharacter from "./components/FloatingCharacter";

export const metadata: Metadata = {
  title: "Sampedia - Edukasi Sampah untuk Semua",
  description:
    "Platform edukasi pengelolaan sampah yang interaktif dan menyenangkan. Belajar memilah, mengolah, dan mengurangi sampah dengan cara yang mudah dipahami.",
  keywords:
    "sampah, edukasi, lingkungan, daur ulang, pengelolaan sampah, ramah lingkungan",
  authors: [{ name: "Sampedia Team" }],
  openGraph: {
    title: "Sampedia - Edukasi Sampah untuk Semua",
    description:
      "Platform edukasi pengelolaan sampah yang interaktif dan menyenangkan",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased">
        <LenisProvider>
          <PageTransition>
            {children}
            <Analytics />
            <FloatingCharacter />
          </PageTransition>
        </LenisProvider>
      </body>
    </html>
  );
}
