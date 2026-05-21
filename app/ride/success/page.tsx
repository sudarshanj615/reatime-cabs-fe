"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();

  const pickup = searchParams.get("pickup") || "";
  const drop = searchParams.get("drop") || "";

  const [open, setOpen] = useState(true);
  const router = useRouter();

  const ride = {
    driverName: "Amit Sharma",
    vehicleNo: "MH20 XY 9876",
    fare: 220,
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">🚕— Ride Created</h1>

      <p>Pickup: {pickup}</p>
      <p>Drop: {drop}</p>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.6)] p-5">
          <div className="min-h-[300px] w-full max-w-[520px] animate-[pop_0.25s_ease-out] rounded-[20px] bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <h2>🎉 Ride Confirmed</h2>

            <p>👨 Driver: {ride.driverName}</p>
            <p>🚘 Vehicle: {ride.vehicleNo}</p>
            <p>💰 Fare: ₹{ride.fare}</p>

            <button
              onClick={() => {
                setOpen(false);
                router.push(`/ride/live/demo-ride`);
              }}
              className="mt-3 w-full rounded-[10px] border-0 bg-black p-[10px] text-white"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessContent />
    </Suspense>
  );
}
