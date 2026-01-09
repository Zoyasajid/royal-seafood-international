"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sky-900/40 bg-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-xl bg-gray-700/90 px-3 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Royal Sea Food
          </span>
     
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-sky-100 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors hover:font-semibold text-black text-base ${
                  isActive ? "font-bold" : "text-medium"
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

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-sky-100 hover:bg-sky-900/60 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-6 rounded bg-current" />
            <span className="h-0.5 w-6 rounded bg-current" />
            <span className="h-0.5 w-6 rounded bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-sky-900/60 bg-sky-950/95 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 text-sm font-medium text-sky-100 sm:px-6 lg:px-8">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-2 py-2 transition-colors ${
                    isActive
                      ? "bg-sky-900 text-white"
                      : "text-sky-100/80 hover:bg-sky-900/70 hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}


