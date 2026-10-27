"use client";

import Link from "next/link";
import { OrderSummary } from "@/components/order-summary";
import { useHydrated } from "@/lib/cart";
import { t } from "@/lib/i18n";
import { loadOrder } from "@/lib/order";

export function Confirmation() {
  const hydrated = useHydrated();
  if (!hydrated) return <div className="h-64" />;

  const order = loadOrder();
  if (!order?.number) {
    return (
      <div className="rounded-[4px] border border-line bg-white px-4 py-10 text-center">
        <p>{t.payment.noOrder}</p>
        <Link href="/" className="mt-4 inline-flex h-11 items-center rounded-[4px] bg-ink px-5 text-[15px] font-medium text-cream">
          {t.success.home}
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="rounded-[4px] bg-ink px-4 py-6 text-cream">
        <div className="flex size-11 items-center justify-center rounded-full border-2 border-cream" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="display mt-4 text-[28px] leading-tight font-extrabold">{t.success.title}</h1>
        <p className="mt-4 text-[13px] text-cream/70">{t.success.orderNumber}</p>
        <p className="display text-[26px] leading-none font-extrabold whitespace-nowrap tabular-nums">{order.number}</p>
      </div>

      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[14px]">
        <dt className="text-stone">{t.payment.recipient}</dt>
        <dd className="break-words">
          {order.name}, {order.phone}
        </dd>
        <dt className="text-stone">{t.checkout.delivery}</dt>
        <dd>{t.delivery[order.delivery]}</dd>
      </dl>

      <OrderSummary lines={order.lines} total={order.total} />

      <p className="text-[13px] text-stone">{t.success.note}</p>

      <Link href="/" className="flex h-12 items-center justify-center rounded-[4px] border border-ink bg-white text-[15px] font-medium">
        {t.success.home}
      </Link>
    </div>
  );
}
