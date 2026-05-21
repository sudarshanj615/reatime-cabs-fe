"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants/routes";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger button */}
      <button
        className="cursor-pointer border-0 bg-transparent p-0"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {/* simple 3-line hamburger icon */}
        <span className="my-1 block h-0.5 w-6 bg-black" />
        <span className="my-1 block h-0.5 w-6 bg-black" />
        <span className="my-1 block h-0.5 w-6 bg-black" />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className="absolute right-0 top-12 z-50 grid gap-[18px] rounded-lg border border-[#f0df9e] bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
        >
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
              className="my-2 block"
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="mt-2 block font-bold"
            href="/signin?mode=login&role=user"
            onClick={() => setOpen(false)}
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}
