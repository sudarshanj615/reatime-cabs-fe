"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants/routes";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu" style={{ position: "relative" }}>
      {/* Hamburger button */}
      <button
        className="hamburger-button"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {/* simple 3-line hamburger icon */}
        <span style={{ display: "block", width: 24, height: 2, background: "#000", margin: "4px 0" }} />
        <span style={{ display: "block", width: 24, height: 2, background: "#000", margin: "4px 0" }} />
        <span style={{ display: "block", width: 24, height: 2, background: "#000", margin: "4px 0" }} />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className="card stack"
          style={{
            position: "absolute",
            right: 0,
            top: "48px",
            background: "white",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            zIndex: 50,
          }}
        >
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
              style={{ display: "block", margin: "8px 0" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="signin-link"
            href="/signin?mode=login&role=user"
            onClick={() => setOpen(false)}
            style={{ display: "block", marginTop: "8px", fontWeight: "bold" }}
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}
