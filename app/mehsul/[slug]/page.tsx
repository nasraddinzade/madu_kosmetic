import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/add-to-cart";
import { ArrowLeftIcon } from "@/components/icons";
import { Price } from "@/components/price";
import { ProductGrid } from "@/components/product-card";
import { ProductImage } from "@/components/product-image";
import { t } from "@/lib/i18n";
import { getProduct, PRODUCTS, productTitle, similarByPrice } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/mehsul/[slug]">): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return product ? { title: productTitle(product) } : {};
}

export default async function ProductPage({ params }: PageProps<"/mehsul/[slug]">) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const category = t.categories[product.category];

  return (
    <div className="mx-auto max-w-6xl px-4 pt-4">
      <Link href="/katalog" className="inline-flex items-center gap-1.5 text-[13px] text-stone">
        <ArrowLeftIcon width={16} height={16} />
        {t.product.back}
      </Link>

      <div className="mt-3 grid gap-5 md:grid-cols-2 md:gap-8">
        <div className="overflow-hidden rounded-[4px] border border-line">
          <ProductImage product={product} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>

        <div className="min-w-0">
          {product.brand && (
            <p lang="en" className="text-[12px] font-medium tracking-wide text-stone uppercase">{product.brand}</p>
          )}
          <h1 className="mt-1 text-[20px] leading-snug font-medium break-words">{product.name}</h1>
          <Price value={product.price} className="mt-3 block text-[56px] leading-none" />

          <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[14px]">
            <dt className="text-stone">{t.product.category}</dt>
            <dd>
              <Link href={`/katalog?kat=${product.category}`} className="underline underline-offset-4">
                {category}
              </Link>
            </dd>
            {product.volume && (
              <>
                <dt className="text-stone">{t.product.volume}</dt>
                <dd>{product.volume}</dd>
              </>
            )}
          </dl>

          <p className="mt-4 text-[14px] leading-relaxed text-ink/80">{t.product.description(category)}</p>

          <div className="mt-5 md:max-w-sm">
            <AddToCart product={product} size="page" />
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="display mb-3 text-[24px] leading-none font-extrabold">{t.product.similar}</h2>
        <ProductGrid products={similarByPrice(product)} />
      </section>
    </div>
  );
}
