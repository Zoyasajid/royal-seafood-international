import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type PremiumCardProps = {
  product: Product;
};

export function PremiumCard({ product }: PremiumCardProps) {


  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#f8fafb] shadow-md  shadow-sky-[#f8fafb]/30 transition hover:-translate-y-1 ">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-transparent" />
      
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4 text-center text-black">
        <h3 className="text-lg font-semibold ">{product.name}</h3>
  
        <p className="mt-4 line-clamp-3 text-base text-gray-500">
          {product.description}
        </p>
        <div className="mt-6 flex items-center justify-between border border-gray-500/30 p-4 rounded-md ">
         
          <Link
            href={`/products/${product.slug}`}
            className="text-xs font-semibold underline-offset-4 transition hover:font-semibold hover:underline w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}


