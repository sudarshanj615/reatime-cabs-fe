import Link from "next/link";

export function ConfirmRideButton() {
  return (
    <Link className="inline-flex items-center justify-center gap-2 min-h-[52px] border-0 rounded-[10px] p-[10px] bg-[#F2B300] text-[#0a0101] font-bold cursor-pointer mt-[10px] transition duration-300 shadow-[0_8px_18px_rgba(248,189,16,0.28)] max-[520px]:w-full disabled:cursor-default disabled:opacity-70" href="/ride/success">
      Confirm Ride
    </Link>
  );
}
