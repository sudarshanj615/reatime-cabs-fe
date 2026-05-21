"use client";

import Link from "next/link";
import { navLinks } from "@/constants/routes";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-[26px] text-[#0f0c0c] font-bold text-[15px] max-[1100px]:gap-4 max-[1100px]:text-[30px] max-[1100px]:ml-3 max-[900px]:hidden max-[760px]:hidden [&_.navbar-link]:no-underline [&_.navbar-link]:py-1.5 [&_.navbar-link]:px-2.5 [&_.navbar-link]:rounded [&_.navbar-link]:text-[rgb(10,9,9)] [&_.navbar-link:hover]:bg-[#eee] [&_.navbar-link-active]:bg-[#eee] [&_.navbar-link-active]:font-semibold" aria-label="Main navigation">
      {navLinks.map((link) => {
        const isActive = pathname === link.href; // check if this link is active
        return (
          <Link
            href={link.href}
            key={link.href}
            className={isActive ?  "navbar-link navbar-link-active" : "navbar-link"}
          >
            {link.label}
          </Link>
        );
      })}

      {/* Sign In link */}
      <Link
        href="/signin?mode=login&role=user"
        className={pathname === "/signin" ? "navbar-link navbar-link-active signin-link" : "navbar-link signin-link"}
      >
        Sign In
      </Link>
    </nav>
  );
}
