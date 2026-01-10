"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { products } from "@/data/products";

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();

  const category = params?.category as string;
  const slug = params?.slug as string;

  console.log(category, slug, "params");

  const product = products.find(
    (p) => p.category === category && p.slug === slug
  );

  const [index, setIndex] = useState(0);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center text-sm text-slate-700">
        Product not found.
      </div>
    );
  }

  const images = product.images.slice(0, 3);

  const related = products.filter(
    (p) =>
      p.category === product.category &&
      p.slug !== product.slug
  );
  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className=" sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">

      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
          Product Detail
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {product.name}
        </h1>
      </header>

      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      
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

            <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 pb-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-sky-500" : "w-2.5 bg-white/70"
                  }`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
            {product.category}
          </p>

          <p className="text-sm text-slate-700">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs text-slate-500">Origin</p>
              <p>{product.origin}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Storage</p>
              <p>{product.storage}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Packaging</p>
              <p>{product.packaging}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Export Quality</p>
              <p>{product.exportQuality}</p>
            </div>
          </div>
        </aside>
      </section>
      </div>

      {related.length > 0 && (
        <div className="bg-foreground">

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6  mt-14">
          <h3 className="my-8 text-black text-4xl font-semibold">
            Also you may like

          </h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Card
                key={item.id}
                image={item.images[0]}
                title={item.name}
                onViewDetail={() =>
                  router.push(
                    `/products/${item.category}/${item.slug}`
                  )
                }
              />
            ))}
          </div>
        </section>
        </div>
      )}
    </div>
  );
}
