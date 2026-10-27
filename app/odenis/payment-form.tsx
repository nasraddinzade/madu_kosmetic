"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { OrderSummary } from "@/components/order-summary";
import { cart, useHydrated } from "@/lib/cart";
import { PAYMENT_DELAY_MS } from "@/lib/config";
import { t } from "@/lib/i18n";
import { loadOrder, newOrderNumber, saveOrder } from "@/lib/order";
import { formatAmount } from "@/lib/products";

// Demo payment: nothing is charged. The real gateway will be epoint (epoint.az):
// this is where the order would be sent to it and the result awaited.
export function PaymentForm() {
  const router = useRouter();
  const hydrated = useHydrated();
  const [processing, setProcessing] = useState(false);

  if (!hydrated) return <div className="h-64" />;

  const order = loadOrder();
  if (!order || order.number) {
    return (
      <div className="mt-5 rounded-[4px] border border-line bg-white px-4 py-10 text-center">
        <p>{t.payment.noOrder}</p>
        <Link href="/katalog" className="mt-4 inline-flex h-11 items-center rounded-[4px] bg-ink px-5 text-[15px] font-medium text-cream">
          {t.cart.toCatalog}
        </Link>
      </div>
    );
  }

  function pay() {
    if (!order) return;
    setProcessing(true);
    setTimeout(() => {
      saveOrder({ ...order, number: newOrderNumber() });
      cart.clear();
      router.replace("/tesdiq");
    }, PAYMENT_DELAY_MS);
  }

  const field = "h-12 w-full rounded-[4px] border border-ink/15 bg-cream/60 px-3 text-[16px] tabular-nums placeholder:text-stone";

  return (
    <div className="mt-5 space-y-5">
      <OrderSummary lines={order.lines} total={order.total} />

      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[14px]">
        <dt className="text-stone">{t.payment.recipient}</dt>
        <dd className="break-words">
          {order.name}, {order.phone}
        </dd>
        <dt className="text-stone">{t.checkout.delivery}</dt>
        <dd>{t.delivery[order.delivery]}</dd>
      </dl>

      <section className="rounded-[4px] border border-line bg-white p-3">
        <h2 className="mb-3 text-[13px] font-medium text-stone">{t.payment.card}</h2>
        <div className="space-y-2" aria-describedby="demo-note">
          <input disabled aria-label={t.payment.cardNumber} placeholder="•••• •••• •••• ••••" className={field} />
          <div className="grid grid-cols-2 gap-2">
            <input disabled aria-label={t.payment.expiry} placeholder="•• / ••" className={field} />
            <input disabled aria-label={t.payment.cvv} placeholder="•••" className={field} />
          </div>
        </div>
        <p id="demo-note" className="mt-3 text-[13px] text-stone">
          {t.payment.demoNote}
        </p>
      </section>

      <button
        type="button"
        onClick={pay}
        disabled={processing}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-ink text-[16px] font-medium text-cream disabled:opacity-80"
      >
        {processing && <span className="size-4 animate-spin rounded-full border-2 border-cream/30 border-t-cream" aria-hidden="true" />}
        {processing ? t.payment.processing : t.payment.pay(`${formatAmount(order.total)} ${t.currency}`)}
      </button>
    </div>
  );
}
