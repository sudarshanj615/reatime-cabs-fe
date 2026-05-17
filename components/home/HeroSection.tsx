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

      <div className="container hero-grid relative z-10">

        {/* LEFT CONTENT ONLY */}
        <div className="hero-copy glass-box">
          {/* <span className="hero-pill">India&apos;s realtime ride app
          </span> */}
           {/* <h1>Bharat moves on {appConfig.name}</h1> */}
{/* 
          <p>
            Book bikes, autos, mini cabs and SUVs in seconds.
            Simple prices, quick pickups, and live tracking for every ride.
          </p> */}

          {children}
        </div>
  
      </div>
    </section>
  );
}
