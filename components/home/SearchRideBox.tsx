"use client";

import { useEffect, useState } from "react";
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

  const [pickupSuggestions, setPickupSuggestions] = useState<
    Suggestion[]
  >([]);

  // FETCH PICKUP SUGGESTIONS
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
      console.error("Suggestion fetch failed:", err);
    }
  };

  // DEBOUNCE SEARCH
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchSuggestions(pickup);
    }, 400);

    return () => clearTimeout(timeout);
  }, [pickup]);

  // CURRENT LOCATION
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          const data = await response.json();

          if (data?.display_name) {
            setPickup(data.display_name);
          }
        } catch (err) {
          console.error(err);
        }
      },
      (error) => {
        console.error(error);
        alert(error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  };

  // ✅ BOOK RIDE HANDLER (FIX)
  const handleBookRide = () => {
    const isPickupEmpty = !pickup || pickup.trim() === "";
    const isDropEmpty = !drop || drop.trim() === "";

    if (isPickupEmpty || isDropEmpty) {
      alert("⚠️ Please enter both pickup and drop location");
      return;
    }

    router.push(
      `/ride/success?pickup=${encodeURIComponent(
        pickup
      )}&drop=${encodeURIComponent(drop)}`
    );
  };

  return (
    <div className="mt-[-205px] grid grid-cols-[1fr_1fr_auto] gap-3.5 rounded-[30px] p-3.5 bg-[rgba(255,255,255,0.35)] backdrop-blur-[18px] shadow-[0_22px_50px_rgba(16,16,16,0.16)] border border-[rgba(255,255,255,0.4)] max-[900px]:grid-cols-1 max-[760px]:grid-cols-1 max-[760px]:rounded-3xl max-[520px]:gap-[10px] max-[520px]:p-[10px]">
      {/* PICKUP */}
      <div className="relative w-full">
        <input
          placeholder="Enter pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] pr-[55px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)] max-[520px]:w-full"
        />

        {/* LOCATION BUTTON */}
        <button
          type="button"
          onClick={getCurrentLocation}
          className="absolute right-3.5 top-1/2 z-[1000] h-[34px] w-[34px] -translate-y-1/2 cursor-pointer rounded-full border-0 bg-white text-lg shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
          title="Use current location"
        >
          📍
        </button>

        {/* SUGGESTIONS */}
        {pickupSuggestions.length > 0 && (
          <div className="absolute left-0 right-0 top-[110%] z-[9999] max-h-[260px] overflow-y-auto rounded-[14px] border border-[#e5e5e5] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            {pickupSuggestions.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setPickup(item.display_name);
                  setPickupSuggestions([]);
                }}
                className={`cursor-pointer px-3.5 py-3 text-sm ${
                  index !== pickupSuggestions.length - 1
                    ? "border-b border-[#f1f1f1]"
                    : ""
                }`}
              >
                📍 {item.display_name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DROP */}
      <input
        className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)] max-[520px]:w-full"
        placeholder="Enter drop location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
      />

      {/* BOOK BUTTON (FIXED) */}
      <button className="inline-flex items-center justify-center gap-2 min-h-[52px] border-0 rounded-[10px] p-[10px] bg-[#F2B300] text-[#0a0101] font-bold cursor-pointer mt-[10px] transition duration-300 shadow-[0_8px_18px_rgba(248,189,16,0.28)] max-[520px]:w-full disabled:cursor-default disabled:opacity-70" onClick={handleBookRide}>
        Book Now
      </button>
    </div>
  );
}
