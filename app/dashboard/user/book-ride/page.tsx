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
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const [pickupCoords, setPickupCoords] = useState({
    lat: 0,
    lng: 0,
  });

  const [dropCoords, setDropCoords] = useState({
    lat: 0,
    lng: 0,
  });

  return (
    <div className="py-16 max-[520px]:py-10 mx-auto w-[min(1200px,calc(100%-40px))] grid gap-[24px]">

      {/* HERO IMAGE */}
      <div className="overflow-hidden rounded-[32px] border border-[#f0df9e] shadow-[0_12px_32px_rgba(12,12,12,0.12)]">
        <img
          src="/images/book-ride-banner.png"
          alt="Book Ride Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] grid gap-[18px]">

        {/* optional search bar */}
        <RideSearchBar />

        <div className="grid gap-6 grid-cols-2 max-[900px]:grid-cols-1">
          <PickupInput
            value={pickup}
            onChange={setPickup}
            setCoordinates={setPickupCoords}
          />

          <DropInput
            value={drop}
            onChange={setDrop}
            setCoordinates={setDropCoords}
          />
        </div>

        <CabSelector />
        <FareEstimate />

        <ConfirmRideButton
          pickup={pickup}
          drop={drop}
        />

      </div>
    </div>
  );
}