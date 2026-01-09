"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/Card";
import { products } from "@/data/products";

export default function ProductsPage() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <header className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            Products
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Product Catalogue
          </h1>
        </div>
        <p className="max-w-md text-sm text-slate-600">
          Browse our current range of export-focused seafood items. Select any
          product to view full specifications and export details.
        </p>
      </header>

      <section aria-label="Seafood products" className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.id}
              image={product.images[0]}
              title={product.name}
              onViewDetail={() => router.push(`/products/${product.slug}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}


