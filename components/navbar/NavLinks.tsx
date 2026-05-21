"use client";

import Link from "next/link";
import { navLinks } from "@/constants/routes";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="nav-links" aria-label="Main navigation">
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
