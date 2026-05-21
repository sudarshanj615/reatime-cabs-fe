import { CabSelector } from "@/components/booking/CabSelector";
import { DropInput } from "@/components/booking/DropInput";
import { FareEstimate } from "@/components/booking/FareEstimate";
import { PickupInput } from "@/components/booking/PickupInput";
import { RideSearchBar } from "@/components/booking/RideSearchBar";
import { ConfirmRideButton } from "@/components/booking/ConfirmRideButton";
import { PageHeader } from "@/components/common/PageHeader";

export default function BookRidePage() {
  return (
    <div className="page-shell container stack">
      <PageHeader title="Book Ride" description="Choose pickup, drop, and cab type for your trip." />
      <div className="card stack">
        <RideSearchBar />
        <div className="grid grid-2">
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
