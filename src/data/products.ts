export type ProductCategory =
  | "Fresh Fish"
  | "Frozen Shrimp"
  | "Lobster"
  | "Crab"
  | "Salmon"
  | "Cephalopods";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  origin: string;
  storage: string;
  packaging: string;
  exportQuality: string;
  images: string[];
  isPremium?: boolean;
};

export const products: Product[] = [
  {
    id: "atlantic-salmon-fillets",
    slug: "atlantic-salmon-fillets",
    name: "Atlantic Salmon Fillets",
    category: "Salmon",
    shortDescription:
      "Premium skin-on Atlantic salmon fillets, trimmed to export specifications.",
    description:
      "Our Atlantic Salmon Fillets are sourced from certified farms operating under strict environmental and quality standards. Each fillet is hand-trimmed, individually quick frozen (IQF), and graded for color, fat content, and texture to meet leading retail and HORECA (hotel, restaurant, catering) requirements worldwide.",
    origin: "Norway / Scotland",
    storage: "Frozen at -18°C or below",
    packaging: "IVP / IQF, 10 kg master carton",
    exportQuality: "EU, HACCP, BRC, and FDA compliant",
    images: [
      "https://images.pexels.com/photos/3296273/pexels-photo-3296273.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3687503/pexels-photo-3687503.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    isPremium: true,
  },
  {
    id: "vannamei-shrimp-pdto",
    slug: "vannamei-shrimp-pdto",
    name: "Vannamei Shrimp PD / PTO",
    category: "Frozen Shrimp",
    shortDescription:
      "Farm-raised white shrimp, peeled deveined tail-on, block or IQF frozen.",
    description:
      "Vannamei shrimp processed in state-of-the-art EU-approved plants. Available in a full range of counts and presentations (PUD, PD, PTO). Brine and glazing are carefully controlled to guarantee consistent net weight and excellent texture upon thawing.",
    origin: "India / Vietnam / Ecuador",
    storage: "Frozen at -18°C or below",
    packaging: "1 kg retail bags or 10 x 1 kg master carton",
    exportQuality: "HACCP, BAP, ASC, and FDA certified facilities",
    images: [
      "https://images.pexels.com/photos/5409023/pexels-photo-5409023.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3731474/pexels-photo-3731474.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3296272/pexels-photo-3296272.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    isPremium: true,
  },
  {
    id: "whole-cleaned-squid",
    slug: "whole-cleaned-squid",
    name: "Whole Cleaned Squid",
    category: "Cephalopods",
    shortDescription:
      "Individually frozen whole cleaned squid for grilling and frying applications.",
    description:
      "Whole cleaned squid with head, viscera, and cartilage removed. Bright, natural color with firm texture and excellent frying performance. Ideal for rings, tubes, and grilled whole squid dishes in Mediterranean and Asian cuisines.",
    origin: "India / China",
    storage: "Frozen at -18°C or below",
    packaging: "IQF 20% glazing, 10 kg master carton",
    exportQuality: "EU-approved plant, HACCP implemented",
    images: [
      "https://images.pexels.com/photos/6287528/pexels-photo-6287528.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6287527/pexels-photo-6287527.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7732536/pexels-photo-7732536.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    isPremium: true,
  },
  {
    id: "whole-cleaned-crab",
    slug: "whole-cleaned-crab",
    name: "Whole Cleaned Blue Crab",
    category: "Crab",
    shortDescription:
      "Frozen whole cleaned blue crab, rich in meat, perfect for steam and boil.",
    description:
      "Wild-caught blue swimmer crab, cleaned and processed within hours of landing to preserve natural sweetness and texture. Packed for foodservice buyers requiring consistent meat yield and strong shell integrity.",
    origin: "Indonesia / Philippines",
    storage: "Frozen at -18°C or below",
    packaging: "5 kg and 10 kg bulk cartons",
    exportQuality: "HACCP certified with regular third-party audits",
    images: [
      "https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3296271/pexels-photo-3296271.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7519039/pexels-photo-7519039.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    id: "pacific-white-fish",
    slug: "pacific-white-fish",
    name: "Pacific White Fish Portions",
    category: "Fresh Fish",
    shortDescription:
      "Boneless, skinless white fish portions ideal for retail and catering.",
    description:
      "Versatile white fish with mild taste, trimmed and portion-controlled for consistent cooking results. Suitable for pan-frying, baking, and value-added breaded products in modern retail programs.",
    origin: "Chile / Peru",
    storage: "Fresh chilled at 0–2°C or frozen at -18°C",
    packaging: "Vacuum packed portions, 5 kg and 10 kg cartons",
    exportQuality: "MSC-certified origin options available",
    images: [
      "https://images.pexels.com/photos/3296280/pexels-photo-3296280.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3296270/pexels-photo-3296270.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    id: "cold-water-lobster-tails",
    slug: "cold-water-lobster-tails",
    name: "Cold Water Lobster Tails",
    category: "Lobster",
    shortDescription:
      "Premium cold water lobster tails graded for the fine dining and cruise sectors.",
    description:
      "Individually frozen lobster tails with firm, sweet meat and consistent shell presentation. Carefully graded and packed to supply luxury hospitality, cruise, and airline catering clients worldwide.",
    origin: "Canada / USA (North Atlantic)",
    storage: "Frozen at -25°C blast frozen, stored at -18°C",
    packaging: "5 kg master carton, multiple counts per pound available",
    exportQuality: "Processed in BRC and MSC-certified facilities",
    images: [
      "https://images.pexels.com/photos/3296278/pexels-photo-3296278.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/8478055/pexels-photo-8478055.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6287301/pexels-photo-6287301.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    isPremium: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(
  slug: string,
  limit = 4,
): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);
  const related = products.filter(
    (p) => p.slug !== slug && p.category === current.category,
  );
  const others = products.filter(
    (p) => p.slug !== slug && p.category !== current.category,
  );
  return [...related, ...others].slice(0, limit);
}


