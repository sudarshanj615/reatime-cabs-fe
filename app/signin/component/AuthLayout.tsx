"use client";

import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="signin-page">
      <section className="signin-panel">

        {/* LEFT SIDE */}
        <div className="signin-copy">
          <h1>Welcome to RealTimeCabs</h1>
          <p>Book rides or drive with us</p>
        </div>

        {/* RIGHT CARD */}
        <div className="signin-card glass-box">

          {/* CENTERED LOGO */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/">
              <Image
                src="/logo/cablogosvg.svg"
                alt="Logo"
                width={160}
                height={80}
                priority
                style={{
                  objectFit: "contain",
                  cursor: "pointer",
                  marginBottom: "20px",
                }}
              />
            </Link>
          </div>

          {children}
        </div>

      </section>
    </div>
  );
}