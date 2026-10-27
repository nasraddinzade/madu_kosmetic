import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { DemoBanner } from "@/components/demo-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Toast } from "@/components/toast";
import { t } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: { default: t.meta.title, template: `%s · ${t.shopName}` },
  description: t.meta.description,
};

export const viewport: Viewport = {
  themeColor: "#14100f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="az" className={`${inter.variable} ${archivo.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans text-[15px]">
        <DemoBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toast />
      </body>
    </html>
  );
}
