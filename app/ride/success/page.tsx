// import Link from "next/link";

// export default function RideSuccessPage() {
//   return (
//     <div className="page-shell container">
//       <div className="card stack">
//         <h1>Ride booked successfully</h1>
//         <p className="muted">Your driver will be assigned in realtime.</p>
//         <Link className="button" href="/ride/live/demo-ride">
//           Track Ride
//         </Link>
//       </div>
//     </div>
//   );
// }


"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter  } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();

  const pickup = searchParams.get("pickup") || "";
  const drop = searchParams.get("drop") || "";

  const [open, setOpen] = useState(true);
  const router = useRouter();

  // dummy data (replace with API later)
  const ride = {
    driverName: "Amit Sharma",
    vehicleNo: "MH20 XY 9876",
    fare: 220,
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: 700 }}>
        🚗 Ride Created
      </h1>

      <p>Pickup: {pickup}</p>
      <p>Drop: {drop}</p>

      {/* POPUP */}
      {open && (
        <div
  style={{
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    padding: "20px",
  }}
>
  <div
    style={{
      background: "#fff",
      padding: "28px",
      borderRadius: "20px",
      width: "100%",
      maxWidth: "520px",
      minHeight: "300px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
      animation: "pop 0.25s ease-out",
    }}
  >
            <h2>🎉 Ride Confirmed</h2>

            <p>👨 Driver: {ride.driverName}</p>
            <p>🚘 Vehicle: {ride.vehicleNo}</p>
            <p>💰 Fare: ₹{ride.fare}</p>

            <button
            onClick={() => {
             setOpen(false);
             router.push(`/ride/live/demo-ride`);
           }}

              style={{
                marginTop: "12px",
                width: "100%",
                padding: "10px",
                background: "black",
                color: "white",
                borderRadius: "10px",
                border: "none",
              }}
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
