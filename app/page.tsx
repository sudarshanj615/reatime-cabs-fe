import { CabTypes } from "@/components/home/CabTypes";
import { Features } from "@/components/home/Features";
import { HeroSection } from "@/components/home/HeroSection";
import { SearchRideBox } from "@/components/home/SearchRideBox";
import { Testimonials } from "@/components/home/Testimonials";


export default function HomePage() {
  return (
    <>
      <HeroSection>
        <SearchRideBox />
      </HeroSection>

      {/* ✅ MAP ADDED HERE */}
      {/* <section className="section">
        <div className="container">
          <Map />
        </div>
      </section> */}

      <section className="section">
        <div className="container stack">
          <CabTypes />
          <Features />
          <Testimonials />

          <section className="download-section">
            <div>
              <span className="hero-pill">Get the app experience</span>
              <h2>Book rides and manage trips from one clean dashboard.</h2>
            </div>

            <div className="download-actions">
              <a href="/signin?mode=login&role=user">Customer app</a>
              <a href="/signin?mode=login&role=driver">Captain app</a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
