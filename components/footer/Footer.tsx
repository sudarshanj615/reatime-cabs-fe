import { Logo } from "@/components/navbar/Logo";
import { appConfig } from "@/constants/appConfig";
import { ContactInfo } from "./ContactInfo";
import { AccountLinks, QuickLinks, ServiceLinks } from "./QuickLinks";

export function Footer() {
  return (
    <footer className="bg-[rgb(253,252,252)] text-white [&_.muted]:text-[#f5e9bd]">
      <div className="border-t-[6px] border-t-[#ffd232] border-b border-b-[rgba(255,255,255,0.12)] bg-[#f5f3f3]">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] flex items-center justify-between gap-7 min-h-[72px] text-[#0e0a07] [&_strong]:uppercase [&_strong]:tracking-normal max-[760px]:items-start max-[760px]:flex-col max-[760px]:justify-center max-[760px]:py-3.5 max-[520px]:gap-2">
          <strong>Realtime rides across your city</strong>
          <span>Mini, Auto, Bike, Scooty, SUV and parcel bookings from one clean app.</span>
        </div>
      </div>

      <div className="mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] grid grid-cols-1 gap-10 py-16 pb-10 max-[1100px]:grid-cols-1 max-[900px]:grid-cols-1 max-[760px]:grid-cols-1 max-[760px]:gap-[34px] max-[760px]:py-12 max-[760px]:pb-8 max-[520px]:py-[38px] max-[520px]:pb-7 max-[520px]:gap-7 [&_h3]:m-0 [&_h3]:mb-5 [&_h3]:text-[#ffd232] [&_h3]:text-[15px] [&_h3]:uppercase [&_h3]:tracking-normal">
        <section className="col-span-2 max-w-[520px] max-[1100px]:text-left max-[1100px]:items-start max-[900px]:col-auto max-[900px]:max-w-none max-[760px]:col-auto max-[760px]:max-w-none [&_p]:my-[18px] [&_p]:text-[#0a0a0a] [&_p]:leading-[1.75]">
          <Logo />
          <p>{appConfig.tagline} Compare cab types, book quickly, and track your ride live.</p>
          <div className="flex flex-wrap gap-[10px] mt-6 [&_span]:border [&_span]:border-[rgba(248,189,16,0.45)] [&_span]:rounded-lg [&_span]:py-[9px] [&_span]:px-3 [&_span]:text-[#0a0a08] [&_span]:text-xs [&_span]:font-bold" aria-label="Service highlights">
            <span>Secure Ride Flow</span>
            <span>Live Tracking</span>
            <span>24/7 Support</span>
          </div>
        </section>

        <div className="grid grid-cols-3 gap-11 items-start max-[1100px]:grid-cols-3 max-[1100px]:gap-7 max-[760px]:grid-cols-1">
          <section>
            <h3>Real Time Cabs</h3>
            <QuickLinks />
          </section>
          <section>
            <h3>Accounts</h3>
            <AccountLinks />
          </section>
          <section>
            <h3>Ride Options</h3>
            <ServiceLinks />
          </section>
        </div>

        <section className="max-w-[520px] max-[900px]:col-auto max-[900px]:max-w-none max-[760px]:col-auto max-[760px]:max-w-none [&_p]:my-[18px] [&_p]:text-[#0a0a0a] [&_p]:leading-[1.75]">
          <h3>Get ride offers</h3>
          <p>Subscribe for fare drops, city updates, and driver availability alerts.</p>
          <form className="grid grid-cols-[1fr_1fr_auto] gap-3 mt-5 max-[900px]:grid-cols-1 max-[760px]:grid-cols-1 [&_input]:min-h-12 [&_input]:border [&_input]:border-[rgba(61,51,51,0.18)] [&_input]:rounded-lg [&_input]:px-3.5 [&_input]:bg-[#e0d8d8] [&_input]:text-[#0b0b0c] [&_button]:min-h-12 [&_button]:border-0 [&_button]:rounded-lg [&_button]:bg-[#ffd232] [&_button]:text-[#0b0b0c] [&_button]:font-extrabold [&_button]:cursor-pointer">
            <input aria-label="Email address" placeholder="Email address" />
            <input aria-label="Phone number" placeholder="Phone number" />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>

      <div className="mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] pt-7 pb-10">
        <ContactInfo />
      </div>

      <div className="border-t border-t-[rgba(255,255,255,0.12)] bg-[#0e0c0c]">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] flex items-center justify-between gap-[22px] min-h-[68px] text-[#d7d7d7] text-[13px] max-[760px]:items-start max-[760px]:flex-col max-[760px]:justify-center max-[760px]:py-3.5 max-[520px]:gap-2">
          <span>Copyright 2026 {appConfig.name}</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Made for fast city rides</span>
        </div>
      </div>
    </footer>
  );
}
