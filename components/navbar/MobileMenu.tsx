"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants/routes";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="button secondary" type="button" onClick={() => setOpen((value) => !value)}>
        Menu
      </button>
      {open ? (
        <div className="card stack" style={{ position: "absolute", right: 16, top: 76 }}>
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="signin-link" href="/signin" onClick={() => setOpen(false)}>
            Sign In
          </Link>
        </div>
      ) : null}
    </div>
  );
}
