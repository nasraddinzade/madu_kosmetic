import { SHOW_DEMO_BANNER } from "@/lib/config";
import { t } from "@/lib/i18n";

export function DemoBanner() {
  if (!SHOW_DEMO_BANNER) return null;
  return (
    <div role="note" className="border-b border-line bg-white px-4 py-1.5 text-center text-[12px] font-medium leading-snug text-ink">
      {t.demoBanner}
    </div>
  );
}
