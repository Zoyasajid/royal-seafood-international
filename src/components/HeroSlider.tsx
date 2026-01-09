"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import slider1 from "../../public/images/slide 1.jpg";
import slider2 from "../../public/images/slide 2.jpg";
import slider3 from "../../public/images/slide 3.png";
import slider4 from "../../public/images/slide 4.jpeg";
import slider5 from "../../public/images/slide 5.jpg";

const heroImages = [slider1, slider2, slider3, slider4, slider5];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section
      aria-label="Premium seafood hero slider"
      className="relative overflow-hidden rounded-3xl border border-sky-900/40 bg-sky-950/80 shadow-lg shadow-sky-950/40"
    >
      <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[520px]">
        {heroImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Premium seafood assortment"
              fill
              priority={i === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-950/60 via-sky-950/50 to-sky-900/20" />
          </div>
        ))}

        <div className="relative z-10 flex h-full flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/90">
            Royal Seafood International
          </p>
          <h1 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-sky-50 sm:text-4xl lg:text-5xl">
            Premium International Seafood Exporters
          </h1>
          <p className="mt-4 max-w-xl text-sm text-sky-100/85 sm:text-base">
            Sourcing certified fresh and frozen seafood from trusted fisheries
            and aquaculture farms, delivering consistent export quality to
            importers, distributors, and retailers worldwide.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-sky-950 shadow-sm shadow-sky-900/40 transition hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-950"
            >
              Explore Products
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-sky-200"
                    : "w-2.5 bg-sky-700/70 hover:bg-sky-400"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute w-10 left-2 top-1/2 -translate-y-1/2 rounded-full bg-sky-800/50 p-2 text-white hover:bg-sky-700/70 transition"
            aria-label="Previous Slide"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute w-10 right-2 top-1/2 -translate-y-1/2 rounded-full bg-sky-800/50 p-2 text-white hover:bg-sky-700/70 transition"
            aria-label="Next Slide"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
