import { HeroSlider } from "@/components/HeroSlider";
import { PremiumCard } from "@/components/PremiumCard";
import { products } from "@/data/products";
import Link from "next/link";
import VannameiImg from "@/../public/images/Vannamei.webp"
import scampiImg from "@/../public/images/scampi.webp"
import blackTigerImg from "@/../public/images/back-tiger.jpg"
import PremiumProducts from "@/components/view/PremiumProducts";
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

      <PremiumProducts/>

      <section
        aria-labelledby="about-company-heading"
        className="overflow-hidden rounded-3xl  px-6 py-8 sm:px-10 sm:py-10"
      >
        <div className="flex flex-col gap-4 text-center ">
          <h2
            id="about-company-heading"
            className="mt-3 text-secondary text-2xl font-semibold tracking-tight  sm:text-5xl"
          >
            About Royal Sea Food International
          </h2>
          <div className="mt-4 text-base text-center sm:mt-10 ">
            <p className="max-w-3xl mx-auto text-gray-500 leading-[2]">
              Royal Sea Food International is a leading seafood exporter and distributor, providing high-quality seafood products to customers worldwide. We are committed to sustainability and ethical sourcing, and we are dedicated to providing the best possible service to our customers.
              We are a team of experienced seafood professionals who are dedicated to providing the best possible service to our customers. We are committed to sustainability and ethical sourcing, and we are dedicated to providing the best possible service to our customers.
            </p>
            <button className=" bg-primary text-base text-white px-8 py-3 rounded-md mt-10 cursor-pointe">
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

