import Link from "next/link";
import { t } from "@/lib/i18n";

// Text wordmark: MADU in Archivo 800, pink stroke under "DU", spaced KOSMETIK below.
export function Logo() {
  return (
    <Link href="/" aria-label={t.logo.home} className="inline-flex flex-col items-start">
      <span className="display text-[30px] leading-none font-extrabold tracking-tight text-cream">
        MA
        <span className="relative inline-block px-[3px]">
          <svg
            aria-hidden="true"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-[22%] h-[78%] w-full"
          >
            <path d="M2 12 C 22 4, 62 2, 98 8 L 96 31 C 72 38, 30 39, 4 34 Z" fill="#f5208b" />
          </svg>
          <span className="relative">DU</span>
        </span>
      </span>
      <span className="mt-1 pl-[2px] text-[10px] leading-none font-medium tracking-[0.42em] text-stone">
        {t.logo.sub}
      </span>
    </Link>
  );
}
