"use client";
import { appConfig } from "@/constants/appConfig";


export function HeroSection({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="hero relative"
      style={{
        backgroundImage: "url('/logo/home.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "70vh",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="container hero-grid relative z-10" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* LEFT CONTENT */}
        <div className="hero-copy glass-box" style={{ minHeight: "400px" }}>
          {children}
        </div>

        {/* MAP
        <div style={{ width: "100%", height: "400px", borderRadius: "12px" }}>
         
        </div> */}
      </div>
    </section>
  );
}