"use client";

import { CONTACTS, ORDER_STORAGE_KEY } from "./config";
import { t } from "./i18n";
import { formatAmount, productTitle } from "./products";
import type { CartItem } from "./cart";

export type DeliveryMethod = keyof typeof t.delivery;

export type OrderLine = { slug: string; title: string; price: number; qty: number };

export type Order = {
  lines: OrderLine[];
  total: number;
  name: string;
  phone: string;
  delivery: DeliveryMethod;
  number?: string; // set once the (demo) payment succeeds
};

export function toOrderLines(items: CartItem[]): OrderLine[] {
  return items.map(({ product, qty }) => ({
    slug: product.slug,
    title: productTitle(product),
    price: product.price,
    qty,
  }));
}

export function saveOrder(order: Order) {
  try {
    sessionStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order));
  } catch {}
}

export function loadOrder(): Order | null {
  try {
    const raw = sessionStorage.getItem(ORDER_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Order) : null;
  } catch {
    return null;
  }
}

export function newOrderNumber(): string {
  const d = new Date();
  const date = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  return `MD-${date}-${Math.floor(1000 + Math.random() * 9000)}`;
}

// The cart as a WhatsApp message, the way the shop takes orders today.
export function whatsappOrderUrl(items: CartItem[], total: number): string {
  const lines = items.map(
    ({ product, qty }, i) =>
      `${i + 1}. ${productTitle(product)} — ${qty} ${t.cart.pcs} × ${formatAmount(product.price)} ${t.currency} = ${formatAmount(product.price * qty)} ${t.currency}`,
  );
  const text = [t.whatsappMessage.greeting, "", ...lines, "", `${t.whatsappMessage.total}: ${formatAmount(total)} ${t.currency}`].join("\n");
  return `https://wa.me/${CONTACTS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
