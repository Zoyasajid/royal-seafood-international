"use client";

import Link from "next/link";
import { FacebookFilled } from "@ant-design/icons";
import { companyDetails } from "@/data/contact";

export function Footer() {
  const contactDetails = companyDetails;

  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contactDetails.address
  )}`;

  const emailLink = `mailto:${contactDetails.email}`;

  const whatsappNumber = contactDetails.phone.replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const footerData = {
    contact: [
      {
        label: "Phone",
        value: contactDetails.phone,
        href: whatsappLink,
      },
      {
        label: "Email",
        value: contactDetails.email,
        href: emailLink,
      },
    ],
    navigation: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Contact Us", href: "/contact" },
    ],
    socials: [
      {
        icon: <FacebookFilled />,
        href: contactDetails.socialMedia.facebook,
      },
    ].filter((s) => s.href),
  };

  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-6">
          <h3 className="text-base font-semibold uppercase">Contact Us</h3>

          <h3 className="text-base font-semibold uppercase md:text-center">
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

      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ul className="space-y-1 text-base ">
            {footerData.contact.map((item, i) => (
              <li key={i}>
                <span className="font-medium">{item.label}:</span>{" "}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline "
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>

          <ul className="space-y-1 text-base pl-0 md:pl-38">
            {footerData.navigation.map((link) => (
              <li key={link.href} className="w-full">
                <Link
                  href={link.href}
                  className="block w-full text-left hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div />
        </div>

        <div className="space-y-4 text-base">
          <div>
            <h4 className="font-semibold uppercase ">Location</h4>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline "
            >
              {contactDetails.address}
            </a>
          </div>

          <div>
            <h4 className="font-semibold uppercase mb-1">Office Hours</h4>
            <p>{contactDetails.officeHours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300" />

      <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center w-full text-base">
          © 2026 Royal Sea Food International
        </p>
      </div>
    </footer>
  );
}
