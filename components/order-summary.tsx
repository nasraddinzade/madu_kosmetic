import { Price } from "./price";
import { t } from "@/lib/i18n";
import { formatAmount } from "@/lib/products";
import type { OrderLine } from "@/lib/order";

export function OrderSummary({ lines, total }: { lines: OrderLine[]; total: number }) {
  return (
    <section className="rounded-[4px] border border-line bg-white px-3 py-3">
      <h2 className="mb-2 text-[13px] font-medium text-stone">{t.checkout.summary}</h2>
      <ul className="space-y-1.5 text-[14px]">
        {lines.map((l) => (
          <li key={l.slug} className="flex justify-between gap-3">
            <span className="min-w-0 break-words">
              {l.title} <span className="whitespace-nowrap text-stone tabular-nums">× {l.qty}</span>
            </span>
            <span className="shrink-0 tabular-nums">
              {formatAmount(l.price * l.qty)} {t.currency}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-baseline justify-between border-t border-line pt-3">
        <span className="font-medium">{t.cart.total}</span>
        <Price value={total} className="text-[30px] leading-none" />
      </div>
    </section>
  );
}
