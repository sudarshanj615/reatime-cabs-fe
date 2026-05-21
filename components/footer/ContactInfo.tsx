import { appConfig } from "@/constants/appConfig";

export function ContactInfo() {
  return (
    <div className="footer-contact">
      <p>
        <span>Sales & Support</span>
        <strong>{appConfig.supportPhone}</strong>
      </p>
      <p>
        <span>Email</span>
        <strong>{appConfig.supportEmail}</strong>
      </p>
      <p>
        <span>Office</span>
        <strong>{appConfig.address}</strong>
      </p>
    </div>
  );
}
