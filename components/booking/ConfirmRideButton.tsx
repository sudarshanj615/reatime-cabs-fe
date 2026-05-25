"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  pickup: string;
  drop: string;
};

export function ConfirmRideButton({ pickup, drop }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleBookRide = async () => {
    if (!pickup || !drop) {
      alert("Please enter pickup and drop");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://192.168.1.23:8081/rides/book",
        {
          pickup,
          drop,
        }
      );

      console.log("Ride booked:", res.data);

      alert("Ride booked successfully!");

      router.push("/ride/success");

    } catch (err) {
      console.error(err);
      alert("Booking failed");
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