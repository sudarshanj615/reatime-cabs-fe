"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { ENDPOINTS } from "@/lib/api/endpoint";
import api from "@/lib/api/client";

type Props = {
  pickup: string;
  drop: string;
};

export function ConfirmRideButton({ pickup, drop }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleBookRide = async () => {
    if (!pickup || !drop) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please enter pickup and drop location",
        confirmButtonText: "OK",
        background: "#fff",
        color: "#000",
      });
      return;
    }

    try {
      setLoading(true);

      const res = await api.post(
        ENDPOINTS.RIDES.CREATE,
        {
          pickup,
          drop,
        }
      );

      console.log("Ride booked:", res.data);

      Swal.fire({
        icon: "success",
        title: "Ride Booked",
        text: "Your ride has been booked successfully!",
        confirmButtonText: "OK",
        background: "#fff",
        color: "#000",
      });

      router.push("/ride/success");

    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: "Failed to book the ride. Please try again.",
        confirmButtonText: "OK",
        background: "#fff",
        color: "#000",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBookRide}
      disabled={loading}
      className="inline-flex items-center justify-center min-h-[52px] rounded-[10px] bg-[#F2B300] px-4 font-bold text-black"
    >
      {loading ? "Booking..." : "Confirm Ride"}
    </button>
  );
}