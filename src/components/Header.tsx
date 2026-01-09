"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const productMenu: MenuProps["items"] = [
  {
    key: "black-tiger",
    label: <Link href="/products/black-tiger">Black Tiger</Link>,
  },
  {
    key: "fresh-water-scampi",
    label: <Link href="/products/fresh-water-scampi">Fresh Water Scampi</Link>,
  },
  {
    key: "vannamei",
    label: <Link href="/products/vannamei">Vannamei</Link>,
  },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sky-900/40 bg-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-xl bg-primary px-3 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Royal Sea Food
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-base font-medium text-black md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            if (item.label === "Products") {
              return (
                <Dropdown
                  key="products"
                  menu={{ items: productMenu }}
                  trigger={["hover"]}
                >
                  <span
                    className={`flex items-center gap-1 cursor-pointer transition ${
                      isActive ? "font-bold" : "font-medium"
                    }`}
                  >
                    Products
                    <DownOutlined className="w-3 h-3  text-black" />
                  </span>
                </Dropdown>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition hover:font-semibold ${
                  isActive ? "font-bold" : ""
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-sky-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-black md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-6 rounded bg-current" />
            <span className="h-0.5 w-6 rounded bg-current" />
            <span className="h-0.5 w-6 rounded bg-current" />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-sky-900/20 bg-white md:hidden">
          <nav className="flex flex-col px-4 py-3 text-base font-medium">
            <Link href="/" onClick={() => setOpen(false)} className="py-2">
              Home
            </Link>

            {/* MOBILE PRODUCTS (NO DROPDOWN — UX CORRECT) */}
            <div className="py-2">
              <p className="font-semibold">Products</p>
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                <Link
                  href="/products/black-tiger"
                  onClick={() => setOpen(false)}
                >
                  Black Tiger
                </Link>
                <Link
                  href="/products/fresh-water-scampi"
                  onClick={() => setOpen(false)}
                >
                  Fresh Water Scampi
                </Link>
                <Link href="/products/vannamei" onClick={() => setOpen(false)}>
                  Vannamei
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
