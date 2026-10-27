import type { Metadata } from "next";
import { Confirmation } from "./confirmation";
import { t } from "@/lib/i18n";

export const metadata: Metadata = { title: t.success.title };

export default function ConfirmationPage() {
  return (
    <div className="mx-auto max-w-xl px-4 pt-8">
      <Confirmation />
    </div>
  );
}
