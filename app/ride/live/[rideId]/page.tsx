"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
});

const rideData = {
  rideId: "RIDE-10234",
  status: "Driver is arriving in 5 mins",
  driverName: "Ravi Kumar",
  driverRating: "4.8 â­",
  vehicleNo: "MH20 AB 1234",
  vehicleModel: "Hyundai i20",
  otp: "4821",
  fare: 180,
  paymentMethod: "Cash",
};

export default function LiveRidePage({
  params,
}: {
  params: { rideId: string };
}) {
  return (
    <div className="mx-auto grid w-[min(1200px,calc(100%-40px))] gap-8 py-16 max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] max-[520px]:py-10">
      <h1 className="text-[2rem] font-extrabold">ðŸš— Live Ride Tracking</h1>

      <div className="grid items-start gap-6 md:grid-cols-3">
        <div className="col-span-2 min-h-[500px] overflow-hidden rounded-3xl border border-[#f0df9e] bg-white p-0 shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:rounded-[20px]">
          <Map />
        </div>

        <div className="col-span-1 rounded-3xl border border-[#f0df9e] bg-white p-[18px] shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:rounded-[20px]">
          <h3 className="mb-3">ðŸš˜ Ride Details</h3>

          <p className="mb-[10px]">
            <strong>Status:</strong> {rideData.status}
          </p>

          <hr className="my-[10px]" />

          <p>
            <strong>Driver:</strong> {rideData.driverName} ({rideData.driverRating})
          </p>

          <p>
            <strong>Vehicle:</strong> {rideData.vehicleModel}
          </p>
          <p className="mb-[10px]">
            <strong>Number:</strong> {rideData.vehicleNo}
          </p>

          <hr className="my-[10px]" />

          <p>
            <strong>Ride ID:</strong> {rideData.rideId}
          </p>
          <p>
            <strong>OTP:</strong> {rideData.otp}
          </p>
          <p>
            <strong>Fare:</strong> â‚¹{rideData.fare}
          </p>
          <p>
            <strong>Payment:</strong> {rideData.paymentMethod}
          </p>
        </div>
      </div>
    </div>
  );
}
