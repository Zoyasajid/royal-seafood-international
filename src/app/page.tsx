import { HeroSlider } from "@/components/HeroSlider";
import { PremiumCard } from "@/components/PremiumCard";
import { products } from "@/data/products";
import Link from "next/link";
import VannameiImg from "@/../public/images/Vannamei.webp"
import scampiImg from "@/../public/images/scampi.jpg"
import blackTigerImg from "@/../public/images/black-tiger.jpg"
export default function Home() {
  const premiumProducts = products.filter((p) => p.isPremium).slice(0, 3);
const ProductCategory =[
  {
    id:1,
    name:"Black Tiger",
    image: blackTigerImg,
    description:"Premium black tiger shrimp sourced from sustainable water",
  },
  {
    id:2,
    name:"Fresh water scampi",
    image: scampiImg,
    description:"Premium black tiger shrimp sourced from sustainable water",
  },
  {
    id:3,
    name:"Vannamei",
    image: VannameiImg,
    description:"Premium black tiger shrimp sourced from sustainable water",
  }
]
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-28 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <HeroSlider />

      <section aria-labelledby="premium-selection-heading" className="">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className=" flex w-full justify-center items-center h-16 mb-12 ">
            <p className="text-3xl font-bold uppercase tracking-[0.2em] ">
              Our Premium Products
            </p>

          </div>

        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ProductCategory.map((product) => (
            <PremiumCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="about-company-heading"
        className="overflow-hidden rounded-3xl  px-6 py-8 sm:px-10 sm:py-10"
      >
        <div className="flex flex-col gap-4 text-center ">
          <h2
            id="about-company-heading"
            className="mt-3 text-2xl font-semibold tracking-tight  sm:text-5xl"
          >
            About Royal Sea Food International
          </h2>
          <div className="mt-4 text-base text-center sm:mt-10 ">
            <p className="max-w-3xl mx-auto text-gray-500 leading-[2]">
              Royal Sea Food International is a leading seafood exporter and distributor, providing high-quality seafood products to customers worldwide. We are committed to sustainability and ethical sourcing, and we are dedicated to providing the best possible service to our customers.
              We are a team of experienced seafood professionals who are dedicated to providing the best possible service to our customers. We are committed to sustainability and ethical sourcing, and we are dedicated to providing the best possible service to our customers.
            </p>
            <button className="border bg-gray-700 border-gray-500/30 text-white px-8 py-2 rounded-md mt-10 cursor-pointer hover:bg-gray-500/30 hover:text-white transition-all duration-300">
              <Link href="/contact">
                Contact Us
              </Link>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}

