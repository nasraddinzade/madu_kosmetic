"use client";

import { useSyncExternalStore } from "react";
import { CART_STORAGE_KEY } from "./config";
import { getProduct, type Product } from "./products";

export type CartLine = { slug: string; qty: number };
export type CartItem = { product: Product; qty: number };

const EMPTY: CartLine[] = [];
const listeners = new Set<() => void>();
let cache: CartLine[] | null = null;

function read(): CartLine[] {
  if (cache) return cache;
  try {
    const raw = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) ?? "[]");
    cache = Array.isArray(raw)
      ? raw.filter(
          (l): l is CartLine =>
            typeof l?.slug === "string" && Number.isInteger(l?.qty) && l.qty > 0 && !!getProduct(l.slug),
        )
      : EMPTY;
  } catch {
    cache = EMPTY;
  }
  return cache;
}

function write(lines: CartLine[]) {
  cache = lines;
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
  } catch {
    // Storage unavailable (private mode): the cart still works for this page view.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key !== CART_STORAGE_KEY) return;
    cache = null;
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export const cart = {
  add(slug: string, qty = 1) {
    const lines = read();
    const existing = lines.find((l) => l.slug === slug);
    write(
      existing
        ? lines.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l))
        : [...lines, { slug, qty }],
    );
  },
  setQty(slug: string, qty: number) {
    if (qty <= 0) return cart.remove(slug);
    write(read().map((l) => (l.slug === slug ? { ...l, qty } : l)));
  },
  remove(slug: string) {
    write(read().filter((l) => l.slug !== slug));
  },
  clear() {
    write(EMPTY);
  },
};

export function useCartLines(): CartLine[] {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

export function useCart() {
  const lines = useCartLines();
  const items: CartItem[] = lines.flatMap((l) => {
    const product = getProduct(l.slug);
    return product ? [{ product, qty: l.qty }] : [];
  });
  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const total = items.reduce((sum, i) => sum + i.qty * i.product.price, 0);
  return { items, count, total };
}

const noopSubscribe = () => () => {};

// false during prerender and hydration, true afterwards. Used to avoid
// flashing an "empty cart" state before localStorage has been read.
export function useHydrated(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
