import type { Metadata } from "next";
import { Suspense } from "react";
import { Catalog } from "./catalog";
import { t } from "@/lib/i18n";

export const metadata: Metadata = { title: t.catalog.title };

export default function CatalogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-5">
      <h1 className="display text-[28px] leading-none font-extrabold">{t.catalog.title}</h1>
      <Suspense fallback={<div className="h-dvh" />}>
        <Catalog />
      </Suspense>
    </div>
  );
}
