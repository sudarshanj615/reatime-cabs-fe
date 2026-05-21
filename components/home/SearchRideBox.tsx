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
    <div className="ride-box glass-box">
      {/* PICKUP */}
      <div style={{ position: "relative", width: "100%" }}>
        <input
          className="input"
          placeholder="Enter pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          style={{ paddingRight: "55px" }}
        />

        {/* LOCATION BUTTON */}
        <button
          type="button"
          onClick={getCurrentLocation}
          style={{
            position: "absolute",
            right: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "white",
            borderRadius: "50%",
            width: "34px",
            height: "34px",
            cursor: "pointer",
            fontSize: "18px",
            zIndex: 1000,
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}
          title="Use current location"
        >
          📍
        </button>

        {/* SUGGESTIONS */}
        {pickupSuggestions.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "110%",
              left: 0,
              right: 0,
              background: "#fff",
              borderRadius: "14px",
              border: "1px solid #e5e5e5",
              overflow: "hidden",
              zIndex: 9999,
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              maxHeight: "260px",
              overflowY: "auto",
            }}
          >
            {pickupSuggestions.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setPickup(item.display_name);
                  setPickupSuggestions([]);
                }}
                style={{
                  padding: "12px 14px",
                  cursor: "pointer",
                  borderBottom:
                    index !== pickupSuggestions.length - 1
                      ? "1px solid #f1f1f1"
                      : "none",
                  fontSize: "14px",
                }}
              >
                📍 {item.display_name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DROP */}
      <input
        className="input"
        placeholder="Enter drop location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
      />

      {/* BOOK BUTTON (FIXED) */}
      <button className="button" onClick={handleBookRide}>
        Book Now
      </button>
    </div>
  );
}