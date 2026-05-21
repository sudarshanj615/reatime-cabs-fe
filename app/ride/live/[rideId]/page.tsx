"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
});

// Dummy data (replace with API later)
const rideData = {
  rideId: "RIDE-10234",
  status: "Driver is arriving in 5 mins",
  driverName: "Ravi Kumar",
  driverRating: "4.8 ⭐",
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
    <div className="page-shell container stack" style={{ gap: "32px" }}>
      {/* TITLE */}
      <h1 style={{ fontSize: "2rem", fontWeight: "800" }}>
        🚗 Live Ride Tracking
      </h1>

      {/* MAIN GRID */}
      <div className="grid gap-6 md:grid-cols-3" style={{ alignItems: "start" }}>
        {/* MAP */}
        <div
          className="card col-span-2"
          style={{
            padding: 0,
            overflow: "hidden",
            minHeight: "500px",
          }}
        >
          <Map />
        </div>

        {/* SINGLE INFO CARD */}
        <div className="card col-span-1" style={{ padding: "18px" }}>
          <h3 style={{ marginBottom: "12px" }}>🚘 Ride Details</h3>

          {/* STATUS */}
          <p style={{ marginBottom: "10px" }}>
            <strong>Status:</strong> {rideData.status}
          </p>

          <hr style={{ margin: "10px 0" }} />

          {/* DRIVER */}
          <p>
            <strong>Driver:</strong> {rideData.driverName} ({rideData.driverRating})
          </p>

          {/* VEHICLE */}
          <p>
            <strong>Vehicle:</strong> {rideData.vehicleModel}
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Number:</strong> {rideData.vehicleNo}
          </p>

          <hr style={{ margin: "10px 0" }} />

          {/* RIDE INFO */}
          <p>
            <strong>Ride ID:</strong> {rideData.rideId}
          </p>
          <p>
            <strong>OTP:</strong> {rideData.otp}
          </p>
          <p>
            <strong>Fare:</strong> ₹{rideData.fare}
          </p>
          <p>
            <strong>Payment:</strong> {rideData.paymentMethod}
          </p>
        </div>
      </div>
    </div>
  );
}