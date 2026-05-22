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
      {/* <section className="py-[72px] max-[520px]:py-[46px]">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)]">
          <Map />
        </div>
      </section> */}

      <section className="py-[72px] max-[520px]:py-[46px]">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] grid gap-[18px]">
          <CabTypes />
          <Features />
          <Testimonials />

          <section className="grid grid-cols-[1fr_auto] gap-7 items-center rounded-[36px] p-11 bg-[#ffd232] max-[900px]:grid-cols-1 max-[900px]:items-start max-[760px]:grid-cols-1 max-[760px]:p-7 max-[520px]:p-[26px] max-[520px]:rounded-[26px] [&_h2]:max-w-[720px] [&_h2]:mx-auto [&_h2]:my-0 [&_h2]:text-[clamp(32px,4vw,52px)] [&_h2]:leading-[1.08] [&_h2]:font-black max-[520px]:[&_h2]:text-[30px] [&_.hero-pill]:bg-white">
            <div>
              <span className="w-fit inline-block rounded-full py-[10px] px-[18px] bg-[rgba(255,255,255,0.65)] text-[#0b0b0c] font-extrabold text-[13px] -translate-y-3 max-[520px]:py-2 max-[520px]:px-3 max-[520px]:text-[11px]">
              Get the app experience
            </span>
              <h2>Book rides and manage trips from one clean dashboard.</h2>
            </div>

            <div className="flex flex-wrap gap-3.5 max-[520px]:w-full [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center [&_a]:min-h-[54px] [&_a]:rounded-full [&_a]:px-6 [&_a]:bg-[#111] [&_a]:text-white [&_a]:font-extrabold max-[520px]:[&_a]:w-full">
              <a href="/signin?mode=login&role=user">Customer app</a>
              <a href="/signin?mode=login&role=driver">Captain app</a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
