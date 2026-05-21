import { CabSelector } from "@/components/booking/CabSelector";
import { DropInput } from "@/components/booking/DropInput";
import { FareEstimate } from "@/components/booking/FareEstimate";
import { PickupInput } from "@/components/booking/PickupInput";
import { RideSearchBar } from "@/components/booking/RideSearchBar";
import { ConfirmRideButton } from "@/components/booking/ConfirmRideButton";
import { PageHeader } from "@/components/common/PageHeader";

export default function BookRidePage() {
  return (
    <div className="py-16 max-[520px]:py-10 mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] grid gap-[18px]">
      <PageHeader title="Book Ride" description="Choose pickup, drop, and cab type for your trip." />
      <div className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:p-5 max-[520px]:rounded-[20px] grid gap-[18px]">
        <RideSearchBar />
        <div className="grid gap-6 grid-cols-2 max-[900px]:grid-cols-1 max-[760px]:grid-cols-1">
          <PickupInput />
          <DropInput />
        </div>
        <CabSelector />
        <FareEstimate />
        <ConfirmRideButton />
      </div>
    </div>
  );
}
