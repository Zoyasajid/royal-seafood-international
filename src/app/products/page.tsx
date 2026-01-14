// "use client";

import PremiumProducts from "@/components/view/PremiumProducts";

// import { useRouter } from "next/navigation";
// import { Card } from "@/components/Card";
// // import { products } from "@/data/products";

// export default function ProductsPage() {
//   const router = useRouter();
//   const products = [
//     {
//       id: "atlantic-salmon-fillets",
//       slug: "atlantic-salmon-fillets",
//       name: "Atlantic Salmon Fillets",
//       category: "Salmon",
//       shortDescription:
//         "Premium skin-on Atlantic salmon fillets, trimmed to export specifications.",
//       description:
//         "Our Atlantic Salmon Fillets are sourced from certified farms operating under strict environmental and quality standards. Each fillet is hand-trimmed, individually quick frozen (IQF), and graded for color, fat content, and texture to meet leading retail and HORECA (hotel, restaurant, catering) requirements worldwide.",
//       origin: "Norway / Scotland",
//       storage: "Frozen at -18°C or below",
//       packaging: "IVP / IQF, 10 kg master carton",
//       exportQuality: "EU, HACCP, BRC, and FDA compliant",
//       images: [
//         "https://images.pexels.com/photos/3296273/pexels-photo-3296273.jpeg?auto=compress&cs=tinysrgb&w=1200",
//         "https://images.pexels.com/photos/3687503/pexels-photo-3687503.jpeg?auto=compress&cs=tinysrgb&w=1200",
//         "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1200",
//       ],
//       isPremium: true,
//     },
//   ];
//   return (
//     <div className="mx-auto max-w-380 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//       <header className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
//         <div>
//           <h1 className="mt-2 text-xl font-semibold  text-slate-900 sm:text-4xl">
//             Products
//           </h1>
//         </div>
//       </header>

//       <section aria-label="Seafood products" className="space-y-6">
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {products.map((product) => (
//             <Card
//               key={product.id}
//               image={product.images[0]}
//               title={product.name}
//               onViewDetail={() => router.push(`/products/${product.slug}`)}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

export default function Products() {
  return (
    <div className="mx-auto flex max-w-380 flex-col gap-28 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <PremiumProducts />
    </div>
  );
}
