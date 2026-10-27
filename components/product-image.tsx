import Image from "next/image";
import { USE_PLACEHOLDERS } from "@/lib/config";
import type { Product } from "@/lib/products";

// One neutral placeholder for every product: real photos and drawn
// placeholders are never mixed.
function Placeholder() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <g fill="none" stroke="#e6deda" strokeWidth="1.6" strokeLinejoin="round">
        <rect x="31" y="40" width="22" height="38" rx="3" />
        <rect x="36.5" y="30" width="11" height="10" rx="1" />
        <rect x="59" y="56" width="12" height="22" rx="1.5" />
        <path d="M61 56V45l8-5v16" />
      </g>
    </svg>
  );
}

export function ProductImage({ product, sizes }: { product: Product; sizes: string }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden bg-white">
      {USE_PLACEHOLDERS || product.noImage ? (
        <Placeholder />
      ) : (
        <Image
          src={`/products/${product.slug}.webp`}
          alt={product.brand ? `${product.brand} ${product.name}` : product.name}
          fill
          sizes={sizes}
          className="object-contain"
        />
      )}
    </div>
  );
}
