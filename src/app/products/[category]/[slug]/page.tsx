"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Collapse } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { products } from "@/data/products";

const { Panel } = Collapse;

export default function ProductDetailPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();

  const product = products.find(
    (p) => p.category === category && p.slug === slug
  );

  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="py-20 text-center text-sm text-gray-500">
        Product not found
      </div>
    );
  }

  const changeImage = (dir: "next" | "prev") => {
    setActiveImage((i) =>
      dir === "next"
        ? (i + 1) % product.images.length
        : (i - 1 + product.images.length) % product.images.length
    );
  };

  const { specifications, sizes } = product;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 text-black">
      <div className="mb-12 text-center">
        <h1 className="text-[42px] font-semibold text-gray-900">
          {product.name.toUpperCase()}
        </h1>
        <p className="mt-1 text-xl uppercase tracking-[0.3em] text-gray-500">
          {product.category.replace("-", " ")}
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="mx-auto w-full">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => changeImage("prev")}
              className="rounded-full bg-white p-3 shadow hover:bg-gray-100"
            >
              <LeftOutlined />
            </button>

            <div className="relative h-[445px] w-full max-w-xl">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={() => changeImage("next")}
              className="rounded-full bg-white p-3 shadow hover:bg-gray-100"
            >
              <RightOutlined />
            </button>
          </div>

          <div className="mt-4 flex gap-3 max-w-xl mx-auto">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative h-24 flex-1 rounded-lg border ${
                  activeImage === i ? "border-emerald-600" : "border-gray-200"
                }`}
              >
                <Image src={img} alt="" fill className="object-contain" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold uppercase">
            Specifications
          </h3>

          <ul className="space-y-2 text-gray-700">
            {Object.entries(specifications).map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h4 className="mb-2 text-xl font-semibold uppercase">
              Available Sizes
            </h4>
            <p>IQF: {sizes.iqf}</p>
            <p>Block: {sizes.block}</p>
          </div>

          <div className="mt-14 max-w-4xl">
            <h3 className="mb-3 text-xl font-semibold uppercase">
              Description
            </h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="mt-8 max-w-4xl">
            <Collapse bordered={false} expandIconPosition="end">
              <Panel header="KEY FEATURES AND BENEFITS" key="1">
                <p className="text-gray-700">{product.keyFeatures}</p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}
