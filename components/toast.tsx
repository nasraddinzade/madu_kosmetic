"use client";

import Link from "next/link";
import { t } from "@/lib/i18n";
import { hideToast, useToast } from "@/lib/toast";

export function Toast() {
  const toast = useToast();
  if (!toast) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(12px,env(safe-area-inset-bottom))]">
      <div
        key={toast.id}
        role="status"
        className="pointer-events-auto mx-auto flex max-w-md items-center gap-3 rounded-[4px] bg-ink px-4 py-3 text-cream shadow-none"
      >
        <div className="min-w-0 flex-1">
          <p className="text-[14px] font-medium">{toast.message}</p>
          {toast.detail && <p className="truncate text-[12px] text-cream/70">{toast.detail}</p>}
        </div>
        <Link href="/sebet" onClick={hideToast} className="shrink-0 text-[14px] font-medium underline underline-offset-4">
          {t.toast.goToCart}
        </Link>
      </div>
    </div>
  );
}
