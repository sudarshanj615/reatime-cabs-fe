"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export function SearchRideBox() {
  const router = useRouter();

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const handleSearch = () => {
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

    router.push("/dashboard/user/book-ride");
  };

  return (
    <div className="flex justify-center items-top -mt-90">
      <div className="flex gap-3 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">

        <input
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          placeholder="Pickup location"
          className="border border-white/40 bg-transparent text-black placeholder:text-gray-300 p-3 rounded-lg outline-none focus:border-yellow-400"
        />

        <input
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          placeholder="Drop location"
          className="border border-white/40 bg-transparent text-black placeholder:text-gray-300 p-3 rounded-lg outline-none focus:border-yellow-400"
        />

        <button
          onClick={handleSearch}
          className="bg-yellow-400 hover:bg-yellow-500 transition px-5 py-3 rounded-lg font-bold text-black"
        >
          Search Ride
        </button>

      </div>
    </div>
  );
}