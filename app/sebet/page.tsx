import type { Metadata } from "next";
import { CartView } from "./cart-view";
import { t } from "@/lib/i18n";

export const metadata: Metadata = { title: t.cart.title };

export default function CartPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-5">
      <h1 className="display text-[28px] leading-none font-extrabold">{t.cart.title}</h1>
      <CartView />
    </div>
  );
}
