import { appConfig } from "@/constants/appConfig";

export function ContactInfo() {
  return (
    <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-1 max-[760px]:grid-cols-1 [&_p]:m-0 [&_p]:border [&_p]:border-[rgba(34,30,30,0.295)] [&_p]:rounded-lg [&_p]:p-5 [&_p]:bg-[rgba(88,83,83,0.04)] [&_span]:block [&_span]:mb-[9px] [&_span]:text-[#ffd232] [&_span]:text-xs [&_span]:font-extrabold [&_span]:uppercase [&_strong]:block [&_strong]:text-[#4e4343d2] [&_strong]:text-[15px] [&_strong]:leading-[1.6]">
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
