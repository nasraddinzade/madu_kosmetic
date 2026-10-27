"use client";

import { useSyncExternalStore } from "react";

export type ToastState = { id: number; message: string; detail?: string } | null;

let state: ToastState = null;
let timer: ReturnType<typeof setTimeout> | undefined;
const listeners = new Set<() => void>();

function emit(next: ToastState) {
  state = next;
  listeners.forEach((l) => l());
}

export function showToast(message: string, detail?: string) {
  clearTimeout(timer);
  emit({ id: Date.now(), message, detail });
  timer = setTimeout(() => emit(null), 2600);
}

export function hideToast() {
  clearTimeout(timer);
  emit(null);
}

export function useToast(): ToastState {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => state,
    () => null,
  );
}
