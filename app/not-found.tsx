import Link from "next/link";
import { t } from "@/lib/i18n";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <p className="display text-[64px] leading-none font-extrabold">404</p>
      <h1 className="mt-3 text-[18px] font-medium">{t.notFound.title}</h1>
      <Link href="/" className="mt-6 inline-flex h-11 items-center rounded-[4px] bg-ink px-5 text-[15px] font-medium text-cream">
        {t.notFound.home}
      </Link>
    </div>
  );
}
