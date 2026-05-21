"use client";
import { appConfig } from "@/constants/appConfig";


export function HeroSection({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="relative h-[70vh] overflow-hidden border-b-0 bg-[#ffd232] bg-[url('/logo/home.png')] bg-cover bg-center bg-no-repeat pt-[82px] pb-24 text-[#0b0b0c] max-[760px]:pb-[58px] max-[760px]:pt-12"
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto flex w-[min(1200px,calc(100%-40px))] flex-col items-center gap-5 max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)]">
        {/* LEFT CONTENT */}
        <div className="flex min-h-[400px] items-center gap-6 text-center max-[520px]:gap-[18px]">
          {children}
        </div>

        {/* MAP
        <div className="h-[400px] w-full rounded-xl">
         
        </div> */}
      </div>
    </section>
  );
}
