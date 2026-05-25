"use client";

import { useState } from "react";

import { CabSelector } from "@/components/booking/CabSelector";
import { DropInput } from "@/components/booking/DropInput";
import { FareEstimate } from "@/components/booking/FareEstimate";
import { PickupInput } from "@/components/booking/PickupInput";
import { RideSearchBar } from "@/components/booking/RideSearchBar";
import { ConfirmRideButton } from "@/components/booking/ConfirmRideButton";
import { PageHeader } from "@/components/common/PageHeader";

export default function BookRidePage() {
  // ✅ ADD STATE HERE (THIS FIXES YOUR ERROR)
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  return (
    <div className="py-16 max-[520px]:py-10 mx-auto w-[min(1200px,calc(100%-40px))] grid gap-[18px]">

      <PageHeader 
        title="Book Ride"
        description="Choose pickup, drop, and cab type for your trip."
      />

      <div className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] grid gap-[18px]">

        {/* optional search bar */}
        <RideSearchBar />

        {/* ✅ FIXED INPUTS */}
        <div className="grid gap-6 grid-cols-2 max-[900px]:grid-cols-1">

          <PickupInput
            value={pickup}
            onChange={setPickup}
          />

          <DropInput
            value={drop}
            onChange={setDrop}
          />

        </div>

        <CabSelector />
        <FareEstimate />

        {/* ✅ FIXED BUTTON */}
        <ConfirmRideButton
          pickup={pickup}
          drop={drop}
        />

      </div>
    </div>
  );
}