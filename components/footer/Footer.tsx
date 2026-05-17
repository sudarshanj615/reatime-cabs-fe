"use client";

import { Logo } from "@/components/navbar/Logo";
import { appConfig } from "@/constants/appConfig";
import { usePathname } from "next/navigation";
import { ContactInfo } from "./ContactInfo";
import { AccountLinks, QuickLinks, ServiceLinks } from "./QuickLinks";

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer-promo">
        <div className="container footer-promo-inner">
          <strong>Realtime rides across your city</strong>
          <span>Mini, Auto, Bike, Scooty, SUV and parcel bookings from one clean app.</span>
        </div>
      </div>

      <div className="container footer-main">
        <section className="footer-brand">
          <Logo />
          <p>{appConfig.tagline} Compare cab types, book quickly, and track your ride live.</p>
          <div className="footer-badges" aria-label="Service highlights">
            <span>Secure Ride Flow</span>
            <span>Live Tracking</span>
            <span>24/7 Support</span>
          </div>
        </section>

        <div className="footer-links-row">
          <section>
            <h3>RealTimeCabs</h3>
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

        <section className="footer-newsletter">
          <h3>Get ride offers</h3>
          <p>Subscribe for fare drops, city updates, and driver availability alerts.</p>
          <form className="footer-form">
            <input aria-label="Email address" placeholder="Email address" />
            <input aria-label="Phone number" placeholder="Phone number" />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>

      <div className="container footer-support-row">
        <ContactInfo />
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>Copyright 2026 {appConfig.name}</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Made for fast city rides</span>
        </div>
      </div>
    </footer>
  );
}
