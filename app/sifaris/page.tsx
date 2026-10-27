import type { Metadata } from "next";
import { CheckoutForm } from "./checkout-form";
import { t } from "@/lib/i18n";

export const metadata: Metadata = { title: t.checkout.title };

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-xl px-4 pt-5">
      <h1 className="display text-[28px] leading-none font-extrabold">{t.checkout.title}</h1>
      <CheckoutForm />
    </div>
  );
}
