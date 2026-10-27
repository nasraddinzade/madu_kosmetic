import type { Metadata } from "next";
import { PaymentForm } from "./payment-form";
import { t } from "@/lib/i18n";

export const metadata: Metadata = { title: t.payment.title };

export default function PaymentPage() {
  return (
    <div className="mx-auto max-w-xl px-4 pt-5">
      <h1 className="display text-[28px] leading-none font-extrabold">{t.payment.title}</h1>
      <PaymentForm />
    </div>
  );
}
