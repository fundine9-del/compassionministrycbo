"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="bg-[#ffffff] border-b border-[#af9e73] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cbo logo_converted.webp"
            alt="Compassion Ministry CBO logo"
            className="h-9 w-9 rounded-full object-cover border border-[#af9e73]"
          />
          <span className="text-xl font-bold text-[#9a3f2c]">
            Compassion Ministry CBO
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-[#010101]">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition ${
                  active
                    ? "text-[#9a3f2c] font-semibold"
                    : "text-[#010101] hover:text-[#9a3f2c]"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#9a3f2c] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#010101] hover:bg-[#fffce6] transition"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-[#af9e73] bg-[#ffffff] px-6 py-4 space-y-2">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition ${
                  active
                    ? "bg-[#fbe0d5] text-[#9a3f2c] font-semibold border-l-4 border-[#9a3f2c]"
                    : "text-[#010101] hover:bg-[#fffce6] hover:text-[#9a3f2c]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
