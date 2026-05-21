"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Suggestion = {
  display_name: string;
  lat: string;
  lon: string;
};

export function SearchRideBox() {
  const router = useRouter();

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [loading, setLoading] = useState(false);

  const [pickupSuggestions, setPickupSuggestions] = useState<Suggestion[]>([]);

  // suggestions
  const fetchSuggestions = async (query: string) => {
    if (!query || query.length < 3) {
      setPickupSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}&limit=5`
      );

      const data = await response.json();
      setPickupSuggestions(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchSuggestions(pickup);
    }, 400);

    return () => clearTimeout(timeout);
  }, [pickup]);

  // BOOK RIDE → backend call
  const handleBookRide = async () => {
    if (!pickup.trim() || !drop.trim()) {
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

      console.log(res.data);
      alert("Ride booked successfully!");
    } catch (err) {
      console.error(err);
      alert("Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-[-205px] grid grid-cols-[1fr_1fr_auto] gap-3.5 rounded-[30px] p-3.5 bg-[rgba(255,255,255,0.35)] backdrop-blur-[18px] shadow-[0_22px_50px_rgba(16,16,16,0.16)] border border-[rgba(255,255,255,0.4)] max-[900px]:grid-cols-1">

      {/* PICKUP */}
      <div className="relative w-full">
        <input
          placeholder="Enter pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)]"
        />

        {/* suggestions */}
        {pickupSuggestions.length > 0 && (
          <div className="absolute left-0 right-0 top-[110%] z-[9999] max-h-[260px] overflow-y-auto rounded-[14px] border bg-white shadow">
            {pickupSuggestions.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setPickup(item.display_name);
                  setPickupSuggestions([]);
                }}
                className="cursor-pointer px-3 py-2 text-sm border-b last:border-none"
              >
                {item.display_name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DROP */}
      <input
        placeholder="Enter drop location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
        className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)]"
      />

      {/* BUTTON */}
      <button
        onClick={handleBookRide}
        disabled={loading}
        className="inline-flex items-center justify-center min-h-[52px] rounded-[10px] bg-[#F2B300] font-bold text-[#111] disabled:opacity-60"
      >
        {loading ? "Booking..." : "Book Now"}
      </button>
    </div>
  );
}