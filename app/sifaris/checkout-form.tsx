"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { OrderSummary } from "@/components/order-summary";
import { useCart, useHydrated } from "@/lib/cart";
import { t } from "@/lib/i18n";
import { saveOrder, toOrderLines, type DeliveryMethod } from "@/lib/order";

const METHODS = Object.keys(t.delivery) as DeliveryMethod[];

export function CheckoutForm() {
  const router = useRouter();
  const hydrated = useHydrated();
  const { items, total } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [delivery, setDelivery] = useState<DeliveryMethod>("pickup");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  if (!hydrated) return <div className="h-64" />;

  if (items.length === 0) {
    return (
      <div className="mt-5 rounded-[4px] border border-line bg-white px-4 py-10 text-center">
        <p>{t.cart.empty}</p>
        <Link href="/katalog" className="mt-4 inline-flex h-11 items-center rounded-[4px] bg-ink px-5 text-[15px] font-medium text-cream">
          {t.cart.toCatalog}
        </Link>
      </div>
    );
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const next = {
      name: name.trim() ? undefined : t.checkout.nameError,
      phone: phone.replace(/\D/g, "").length >= 9 ? undefined : t.checkout.phoneError,
    };
    setErrors(next);
    if (next.name || next.phone) return;
    saveOrder({ lines: toOrderLines(items), total, name: name.trim(), phone: phone.trim(), delivery });
    router.push("/odenis");
  }

  const input = "h-12 w-full rounded-[4px] border bg-white px-3 text-[16px]";

  return (
    <form onSubmit={submit} noValidate className="mt-5 space-y-6">
      <fieldset className="space-y-3">
        <legend className="mb-2 text-[13px] font-medium text-stone">{t.checkout.contact}</legend>
        <label className="block">
          <span className="mb-1 block text-[14px] font-medium">{t.checkout.name}</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={`${input} ${errors.name ? "border-ink" : "border-ink/15"}`}
          />
          {errors.name && <span className="mt-1 block text-[13px] font-medium">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="mb-1 block text-[14px] font-medium">{t.checkout.phone}</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={t.checkout.phonePlaceholder}
            aria-invalid={!!errors.phone}
            className={`${input} ${errors.phone ? "border-ink" : "border-ink/15"} placeholder:text-stone/70`}
          />
          {errors.phone && <span className="mt-1 block text-[13px] font-medium">{errors.phone}</span>}
        </label>
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-[13px] font-medium text-stone">{t.checkout.delivery}</legend>
        <div className="overflow-hidden rounded-[4px] border border-ink/15 bg-white">
          {METHODS.map((m) => (
            <label key={m} className="flex cursor-pointer items-center gap-3 border-b border-line px-3 py-3.5 last:border-b-0">
              <input
                type="radio"
                name="delivery"
                value={m}
                checked={delivery === m}
                onChange={() => setDelivery(m)}
                className="size-[18px] shrink-0 accent-ink"
              />
              <span className={`text-[15px] ${delivery === m ? "font-medium" : ""}`}>{t.delivery[m]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <OrderSummary
        lines={toOrderLines(items)}
        total={total}
      />

      <button type="submit" className="h-12 w-full rounded-[4px] bg-ink text-[16px] font-medium text-cream">
        {t.checkout.submit}
      </button>
    </form>
  );
}
