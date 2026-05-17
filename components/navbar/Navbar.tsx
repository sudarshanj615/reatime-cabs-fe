"use client";

import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export function Navbar() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="nav">
      <div className="nav-inner border justify-between"> 
        <Logo />
        <NavLinks />
        <div className="mobile-only">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
