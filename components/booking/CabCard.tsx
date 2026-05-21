import type { cabTypes } from "@/constants/cabTypes";

type Cab = (typeof cabTypes)[number];

export function CabCard({ cab }: { cab: Cab }) {
  return (
    <button className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:p-5 max-[520px]:rounded-[20px] cursor-pointer text-left transition-[transform,border-color] duration-150 ease-in hover:-translate-y-0.5 hover:border-[#ffd232]" type="button">
      <h3>
        {cab.icon} {cab.name}
      </h3>
      <p className="text-sm text-[rgba(255,255,255,0.7)] mb-[15px]">{cab.seats} seat ride</p>
      <strong>Rs. {cab.baseFare} base fare</strong>
    </button>
  );
}
