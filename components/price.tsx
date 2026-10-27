import { formatAmount } from "@/lib/products";
import { t } from "@/lib/i18n";

// The price is the headline: Archivo, near-black digits, pink manat sign.
export function Price({ value, className = "" }: { value: number; className?: string }) {
  return (
    <span className={`display font-extrabold whitespace-nowrap tabular-nums ${className}`}>
      {formatAmount(value)}
      <span className="ml-[0.18em] text-pink">{t.currency}</span>
    </span>
  );
}
