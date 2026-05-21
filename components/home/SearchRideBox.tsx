"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Suggestion = {
  display_name: string;
  lat: string;
  lon: string;
};

export function SearchRideBox() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [loading, setLoading] = useState(false);

  const [pickupSuggestions, setPickupSuggestions] = useState<Suggestion[]>([]);

  // =========================
  // LOCATION SUGGESTIONS
  // =========================
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchSuggestions(pickup);
    }, 400);

    return () => clearTimeout(timeout);
  }, [pickup]);

  // =========================
  // CURRENT LOCATION
  // =========================
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
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
    });
  };

  // =========================
  // BOOK RIDE (FIXED)
  // =========================
  const handleBookRide = async () => {
    if (!pickup.trim() || !drop.trim()) {
      alert("⚠️ Please enter both pickup and drop location");
      return;
    }

    try {
      setLoading(true);

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      const payload = {
        pickup: pickup.trim(),
        drop: drop.trim(),
      };

      const res = await axios.post(
        "http://192.168.1.23:8081/rides/book",
        payload,
        {
          signal: controller.signal,
        }
      );

      clearTimeout(timeout);

      console.log("Backend Response:", res.data);

      alert("🚕 Ride booked successfully!");
    } catch (error: any) {
      console.error("Booking error:", error);

      if (error.name === "CanceledError" || error.name === "AbortError") {
        alert("⏱ Request timeout. Server not responding.");
      } else {
        alert("❌ Failed to book ride (check backend)");
      }
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // UI
  // =========================
  return (
    <div className="mt-[-205px] grid grid-cols-[1fr_1fr_auto] gap-3.5 rounded-[30px] p-3.5 bg-[rgba(255,255,255,0.35)] backdrop-blur-[18px] shadow-[0_22px_50px_rgba(16,16,16,0.16)] border border-[rgba(255,255,255,0.4)] max-[900px]:grid-cols-1">

      {/* PICKUP */}
      <div className="relative w-full">
        <input
          placeholder="Enter pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808]"
        />
      </div>

      {/* DROP */}
      <input
        className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808]"
        placeholder="Enter drop location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
      />

      {/* BOOK BUTTON */}
      <button
        onClick={handleBookRide}
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 min-h-[52px] border-0 rounded-[10px] p-[10px] bg-[#F2B300] text-[#0a0101] font-bold cursor-pointer transition duration-300 shadow-[0_8px_18px_rgba(248,189,16,0.28)] disabled:opacity-60"
      >
        {loading ? "Booking..." : "Book Now"}
      </button>
    </div>
  );
}