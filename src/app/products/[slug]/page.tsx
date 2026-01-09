"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { getProductBySlug, getRelatedProducts } from "@/data/products";

type ProductPageProps = {
  params: { slug: string };
};

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  const router = useRouter();
  const [index, setIndex] = useState(0);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center text-sm text-slate-700">
        Product not found.
      </div>
    );
  }

  const images = product.images.slice(0, 3);
  const related = getRelatedProducts(product.slug, 4);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
          Product Detail
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {product.name}
        </h1>
      </header>

      {/* Main two-column layout */}
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        {/* Left: image slider */}
        <div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <div className="relative h-72 w-full sm:h-80 lg:h-96">
              {images.map((src, i) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-4">
              <div className="flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to image ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-sky-500" : "w-2.5 bg-white/70"
                    }`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: product info */}
        <aside className="space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
              {product.category}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
              {product.name}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            {product.description}
          </p>

          <div className="space-y-3 text-sm text-slate-700">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Specifications
            </h3>
            <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium text-slate-500">Origin</dt>
                <dd className="text-sm text-slate-800">{product.origin}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">
                  Storage
                </dt>
                <dd className="text-sm text-slate-800">{product.storage}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">
                  Packaging
                </dt>
                <dd className="text-sm text-slate-800">{product.packaging}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">
                  Export standards
                </dt>
                <dd className="text-sm text-slate-800">
                  {product.exportQuality}
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section
          aria-label="Related products"
          className="mt-12 border-t border-slate-200 pt-10"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
                Related Products
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
                Explore Similar Seafood Items
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Card
                key={item.id}
                image={item.images[0]}
                title={item.name}
                onViewDetail={() => router.push(`/products/${item.slug}`)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

