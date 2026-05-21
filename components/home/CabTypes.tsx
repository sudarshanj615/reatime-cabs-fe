import { cabTypes } from "@/constants/cabTypes";

export function CabTypes() {
  return (
    <div className="grid gap-[30px]">
      <div className="grid gap-[10px] text-center [&_span]:text-[#5d5d5d] [&_span]:font-extrabold [&_span]:uppercase [&_span]:text-[13px] [&_h2]:max-w-[720px] [&_h2]:mx-auto [&_h2]:my-0 [&_h2]:text-[clamp(32px,4vw,52px)] [&_h2]:leading-[1.08] [&_h2]:font-black max-[520px]:[&_h2]:text-[30px]">
        <span>Our services</span>
        <h2>One app, many ways to move</h2>
      </div>
      { <div className="grid grid-cols-6 gap-[22px] max-[1100px]:grid-cols-2 max-[760px]:grid-cols-1 max-[520px]:grid-cols-1">
        {cabTypes.map((cab) => (
          <div className="rounded-[28px] p-7 bg-white shadow-[0_16px_36px_rgba(0,0,0,0.08)] text-center max-[520px]:p-5 max-[520px]:rounded-[20px] [&_h3]:m-0 [&_h3]:mb-[10px] [&_h3]:text-[22px] [&_p]:m-0 [&_p]:text-[#5d5d5d] [&_p]:leading-[1.65]" key={cab.id}>
            <div className="grid place-items-center w-[74px] h-[74px] mx-auto mb-[18px] rounded-full bg-[#fff2ac] text-[34px]">{cab.icon}</div>
            <h3>{cab.name}</h3>
            <p>{cab.seats} seat ride starting from Rs. {cab.baseFare}</p>
          </div>
        ))}
      </div> }
    </div>
  );
}
