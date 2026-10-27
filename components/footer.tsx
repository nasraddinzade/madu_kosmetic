import { InstagramIcon, WhatsAppIcon } from "./icons";
import { CONTACTS } from "@/lib/config";
import { t } from "@/lib/i18n";

export function Footer() {
  return (
    <footer className="mt-12 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-[14px] sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="mb-1.5 text-[11px] font-medium tracking-[0.18em] text-stone uppercase">{t.footer.address}</h2>
          <p>{CONTACTS.address}</p>
        </div>
        <div>
          <h2 className="mb-1.5 text-[11px] font-medium tracking-[0.18em] text-stone uppercase">{t.footer.hours}</h2>
          <p>{t.footer.hoursValue(CONTACTS.hours)}</p>
        </div>
        <div className="space-y-2">
          <a
            href={`https://wa.me/${CONTACTS.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <WhatsAppIcon width={18} height={18} />
            <span>
              <span className="sr-only">{t.footer.whatsapp}: </span>
              {CONTACTS.whatsappDisplay}
            </span>
          </a>
          <a
            href={`https://instagram.com/${CONTACTS.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <InstagramIcon width={18} height={18} />
            <span>
              <span className="sr-only">{t.footer.instagram}: </span>@{CONTACTS.instagram}
            </span>
          </a>
        </div>
        <div>
          <h2 className="mb-1.5 text-[11px] font-medium tracking-[0.18em] text-stone uppercase">{t.footer.delivery}</h2>
          <ul className="space-y-0.5">
            {Object.values(t.delivery).map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-cream/10 px-4 py-4 text-[12px] text-stone">{t.shopName}</div>
    </footer>
  );
}
