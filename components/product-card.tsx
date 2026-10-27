import Link from "next/link";
import { AddToCart } from "./add-to-cart";
import { Price } from "./price";
import { ProductImage } from "./product-image";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex min-w-0 flex-col border-r border-b border-line bg-white">
      <Link href={`/mehsul/${product.slug}`} className="flex flex-1 flex-col">
        <ProductImage product={product} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" />
        <div className="flex flex-1 flex-col px-3 pt-2">
          {product.brand && (
            <p lang="en" className="truncate text-[11px] font-medium tracking-wide text-stone uppercase">{product.brand}</p>
          )}
          <h3 className="line-clamp-2 text-[13px] leading-[1.3] break-words">{product.name}</h3>
          <Price value={product.price} className="mt-auto pt-1.5 text-[26px] leading-none" />
        </div>
      </Link>
      <div className="p-3 pt-2.5">
        <AddToCart product={product} />
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 border-t border-l border-line md:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
