"use client";

import React, { useState } from "react";
import { AppstoreOutlined } from "@ant-design/icons";

const servicesData = [
  "Soursing allkind of seafood products from Bangladesh and South-East Asia",
  "Negotiate the price on behalf of the clients",
  "Confirming assortments according to the client;s demand",
  "Strictly supervise and monitor all the process until shipment on behalf of the clients",
  "Pre-shipment inspection",
  "Confirming on-time shipment",
  "Maintaining correspondence and feedback about market behaviour and provide transparent information to clients and packers",
  "Provide all kind of supports to our valued customers and exporters as well",
  "We take all responsiblilities on behalf of our customers to ensure long-lasting bussiness relationship",
];

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-50 py-10">
      <div className=" mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-btn text-primary font-bold text-base uppercase tracking-widest mb-4">
          <AppstoreOutlined />
          Our Services
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-black mb-18 max-w-4xl mx-auto leading-tight">
          Explore the Full Range of Services We Offer to Meet Your Needs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {servicesData.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className=" p-8 rounded-xl border-2 text-center transition-all duration-300 text-gray-700 flex justify-center items-center bg-white border-primary/20"
                // className={`
                //   cursor-pointer p-8 rounded-xl border-2 text-center transition-all duration-300 flex justify-center items-center
                //   ${isActive
                //     ? "bg-primary text-white border-primary shadow-xl scale-105"
                //     : "bg-white text-gray-700 border-transparent hover:border-primary hover:shadow-md"}
                // `}
              >
                <p className="text-base leading-relaxed">{service}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
