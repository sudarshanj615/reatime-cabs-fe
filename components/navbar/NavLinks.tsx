import Link from "next/link";
import { navLinks } from "@/constants/routes";

export function NavLinks() {
  return (
    <nav className="nav-links" aria-label="Main navigation">
      {navLinks.map((link) => (
        <Link href={link.href} key={link.href}>
          {link.label}
        </Link>
      ))}
      <Link className="signin-link" href="/signin">
        Sign In
      </Link>
    </nav>
  );
}
