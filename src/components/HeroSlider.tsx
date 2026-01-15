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
      aria-label="Premium seafood hero slider text-justify"
      className="relative overflow-hidden "
    >
      <div className="relative h-[85vh] sm:h-[95vh]">
        {heroImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 ${
                i === index ? "animate-zoom" : ""
              }`}
            >
              <Image
                src={src}
                alt="Premium seafood assortment"
                fill
                priority={i === 0}
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t sm:bg-linear-to-r from-black/60 via-black/20 to-black/30" />
          </div>
        ))}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-360 px-4 sm:px-6">
            <div className="max-w-2xl text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Royal Seafood International
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl">
                Premium International Seafood Exporters
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
                Sourcing certified fresh and frozen seafood from trusted
                fisheries and aquaculture farms, delivering consistent export
                quality worldwide.
              </p>

              <div className="mt-6 flex justify-center sm:justify-start">
                <Link
                  href="/products"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/40 transition hover:bg-primary/90"
                >
                  Explore Products
                </Link>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-2 sm:justify-start">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-sky-200"
                      : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 z-20 w-10 -translate-y-1/2 rounded-full bg-primary/50 p-2 text-white transition hover:bg-primary"
          aria-label="Previous Slide"
        >
          {" "}
          &#10094;{" "}
        </button>{" "}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 z-20 w-10 -translate-y-1/2 rounded-full bg-primary/50 p-2 text-white transition hover:bg-primary"
          aria-label="Next Slide"
        >
          {" "}
          &#10095;{" "}
        </button>
      </div>

      <style jsx>{`
        @keyframes zoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        .animate-zoom {
          animation: zoom 3s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}
