"use client";

import Link from "next/link";
import { MailOutlined, EnvironmentOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { companyDetails } from "@/data/contact";

const contactItems = [
  {
    icon: <WhatsAppOutlined className="text-lg mt-1" />,
    label: "Call Us",
    link: `https://wa.me/${companyDetails.phone.replace(/\D/g, "")}`,
    value: companyDetails.phone,
  },
  {
    icon: <EnvironmentOutlined className="text-lg mt-1" />,
    label: "Address",
    link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyDetails.address)}`,
    value: companyDetails.address,
  },
  {
    icon: <MailOutlined className="text-lg mt-1" />,
    label: "Email",
    link: `mailto:${companyDetails.email}`,
    value: companyDetails.email,
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="mx-auto max-w-380 px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{companyDetails.companyName}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{companyDetails.description}</p>
            <div>
              <h3 className="font-semibold mb-2">Office hours:</h3>
              <p>{companyDetails.officeHours}</p>
            </div>
          </div>

          <div className="bg-primary text-white rounded-lg p-6 space-y-5">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                {item.icon}
                <div>
                  <p className="text-sm opacity-80">{item.label}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div />
        </div>

        <div className="my-10 border-t border-gray-200" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-600">
            © {new Date().getFullYear()} {companyDetails.companyName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["/", "/products", "/about", "/contact"].map((href, i) => (
              <Link key={i} href={href} className="hover:text-primary">
                {["Home", "Products", "About Us", "Contact"][i]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
