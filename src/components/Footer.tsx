"use client";

import Link from "next/link";
import {
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinFilled,
} from "@ant-design/icons";

export function Footer() {
  const footerData = {
    contact: [
      "Phone: +92 300 1234567",
      "Email: info@royalseafood.com",
    ],
    navigation: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Contact Us", href: "/contact" },
    ],
    socials: [
      { icon: <FacebookFilled />, href: "#" },
      { icon: <TwitterOutlined />, href: "#" },
      { icon: <InstagramOutlined />, href: "#" },
      { icon: <LinkedinFilled />, href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-100 text-gray-800">

      <div className="mx-auto max-w-6xl px-4 pt-10">


        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-6">
          <h3 className="text-sm font-semibold uppercase">
            Contact Us
          </h3>

          <h3 className="text-sm font-semibold uppercase md:text-center">
            Navigation
          </h3>

          <div className="flex md:justify-end gap-4 text-xl">
            {footerData.socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="hover:text-gray-900 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="" />

      <div className="mx-auto max-w-6xl px-4 py-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ul className="space-y-1 text-sm">
            {footerData.contact.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <ul className="space-y-1 text-sm md:text-center">
            {footerData.navigation.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div />
        </div>

        <div className=" space-y-4 text-sm">
          <div>
            <h4 className="font-semibold uppercase mb-1">Location</h4>
            <p>123 Seafood Street, Karachi, Pakistan</p>
          </div>

          <div>
            <h4 className="font-semibold uppercase mb-1">Office Hours</h4>
            <p>09:00 AM – 07:00 PM</p>
            <p>Saturday – Thursday</p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-300" />

      <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 Royal Sea Food International</p>
      </div>

    </footer>
  );
}
