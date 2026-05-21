const features = [
  { title: "Quick pickups", text: "Nearby captains and drivers help you get moving without waiting around." },
  { title: "Transparent fares", text: "Choose your ride type and see sensible fare estimates before confirming." },
  { title: "Live tracking", text: "Follow every ride from pickup to drop with simple status updates." },
  { title: "Built for drivers", text: "A focused driver dashboard keeps active rides and earnings easy to scan." },
];

export function Features() {
  return (
    <div className="grid gap-[30px]">
      <div className="grid gap-[10px] text-center [&_span]:text-[#5d5d5d] [&_span]:font-extrabold [&_span]:uppercase [&_span]:text-[13px] [&_h2]:max-w-[720px] [&_h2]:mx-auto [&_h2]:my-0 [&_h2]:text-[clamp(32px,4vw,52px)] [&_h2]:leading-[1.08] [&_h2]:font-black max-[520px]:[&_h2]:text-[30px]">
        <span>Why choose us</span>
        <h2>Fast, simple and dependable</h2>
      </div>
      <div className="grid grid-cols-4 gap-[22px] max-[1100px]:grid-cols-2 max-[760px]:grid-cols-1 max-[520px]:grid-cols-1">
        {features.map((feature) => (
          <div className="rounded-[28px] p-7 bg-white shadow-[0_16px_36px_rgba(0,0,0,0.08)] max-[520px]:p-5 max-[520px]:rounded-[20px] [&_h3]:m-0 [&_h3]:mb-[10px] [&_h3]:text-[22px] [&_p]:m-0 [&_p]:text-[#5d5d5d] [&_p]:leading-[1.65]" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
