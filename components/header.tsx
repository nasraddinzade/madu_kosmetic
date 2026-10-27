import Form from "next/form";
import { CartLink } from "./cart-link";
import { SearchIcon } from "./icons";
import { Logo } from "./logo";
import { CONTACTS } from "@/lib/config";
import { t } from "@/lib/i18n";

export function Header() {
  return (
    <>
      <header className="bg-ink">
        <div className="mx-auto flex max-w-6xl items-end justify-between px-4 pt-4 pb-2">
          <Logo />
          <a
            href={`https://wa.me/${CONTACTS.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[13px] text-cream/80 hover:text-cream sm:block"
          >
            {CONTACTS.whatsappDisplay}
          </a>
        </div>
      </header>
      {/* The search row sticks to the top while scrolling. */}
      <div className="sticky top-0 z-30 bg-ink">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 pt-1 pb-3">
          <Form action="/katalog" role="search" className="relative min-w-0 flex-1">
            <label htmlFor="site-search" className="sr-only">
              {t.search.label}
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              enterKeyHint="search"
              autoComplete="off"
              placeholder={t.search.placeholder}
              className="h-10 w-full rounded-[4px] border-0 bg-white pr-10 pl-3 text-[15px] text-ink placeholder:text-stone focus:outline-2 focus:outline-cream"
            />
            <button
              type="submit"
              aria-label={t.search.submit}
              className="absolute top-0 right-0 flex h-10 w-10 items-center justify-center text-ink"
            >
              <SearchIcon />
            </button>
          </Form>
          <CartLink />
        </div>
      </div>
    </>
  );
}
