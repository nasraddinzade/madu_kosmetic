"use client";

import Link from "next/link";
import { BagIcon } from "./icons";
import { useCart } from "@/lib/cart";
import { t } from "@/lib/i18n";

export function CartLink() {
  const { count } = useCart();
  return (
    <Link
      href="/sebet"
      aria-label={t.cartLink(count)}
      className="relative flex h-10 w-11 shrink-0 items-center justify-center rounded-[4px] border border-cream/25 text-cream"
    >
      <BagIcon width={22} height={22} />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 min-w-[20px] rounded-full bg-cream px-1 text-center text-[11px] leading-[20px] font-medium text-ink tabular-nums">
          {count}
        </span>
      )}
    </Link>
  );
}
