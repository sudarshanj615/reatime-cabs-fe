"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const parcelTypes = [
  { label: "Documents", value: "documents" },
  { label: "Food", value: "food" },
  { label: "Grocery", value: "grocery" },
  { label: "Electronics", value: "electronics" },
  { label: "Package", value: "package" },
];

export default function ParcelPage() {
  const router = useRouter();

  // FORM STATES
  const [parcelType, setParcelType] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  // VEHICLE DETECTION
  let suggestedVehicle = "Fill all details";

  const allFieldsFilled =
    parcelType !== "" &&
    pickup !== "" &&
    drop !== "" &&
    phone !== "";

  if (allFieldsFilled) {
    // DOCUMENTS / FOOD
    if (
      parcelType === "documents" ||
      parcelType === "food"
    ) {
      suggestedVehicle = "Bike";
    }

    // GROCERY
    else if (parcelType === "grocery") {
      suggestedVehicle = "MiniCab / Pickup";
    }

    // ELECTRONICS
    else if (parcelType === "electronics") {
      suggestedVehicle = "MiniTruck";
    }

    // PACKAGE
    else if (parcelType === "package") {
      suggestedVehicle = "Truck";
    }
  }

  // HANDLE PARCEL TYPE CHANGE
  function handleParcelTypeChange(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const value = e.target.value;

    setParcelType(value);

    // REDIRECT TO DIMENSIONS PAGE
    if (value === "package") {
      router.push("/parcel/dimensions");
    }
  }

  return (
    <div className="parcel-page">
      {/* HERO */}
      <section className="parcel-hero">
        <div className="container parcel-hero-grid">
          <div>
            <span className="hero-pill">
              Parcel delivery
            </span>

            <h1>
              Send parcels across the city with
              RealTimeCabs.
            </h1>

            <p>
              Enter parcel details and get
              automatic vehicle suggestions.
            </p>
          </div>

          <div className="parcel-summary-card">
            <strong>Live parcel booking</strong>

            <span>
              Bike, Pickup, MiniTruck and Truck
              options
            </span>
          </div>
        </div>
      </section>

      {/* BOOKING FORM WITH BACKGROUND IMAGE */}
      <section
        className="parcel-booking-wrapper"
        style={{
          backgroundImage:
            "url('/images/parcelbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <section className="container parcel-booking">
          <form className="parcel-form">
            <h2>Book a parcel delivery</h2>

            {/* PARCEL TYPE */}
            <label>
              Parcel Type

              <select
                value={parcelType}
                onChange={handleParcelTypeChange}
              >
                <option value="" disabled>
                  Select parcel type
                </option>

                {parcelTypes.map((type) => (
                  <option
                    key={type.value}
                    value={type.value}
                  >
                    {type.label}
                  </option>
                ))}
              </select>
            </label>

            {/* LOCATIONS */}
            <div className="grid grid-2">
              <label>
                Pickup Location

                <input
                  value={pickup}
                  onChange={(e) =>
                    setPickup(e.target.value)
                  }
                  placeholder="Enter pickup address"
                />
              </label>

              <label>
                Drop Location

                <input
                  value={drop}
                  onChange={(e) =>
                    setDrop(e.target.value)
                  }
                  placeholder="Enter drop address"
                />
              </label>
            </div>

            {/* PHONE */}
            <label>
              Receiver Phone

              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                placeholder="Enter receiver mobile number"
              />
            </label>

            {/* NOTES */}
            <label>
              Parcel Notes

              <textarea
                rows={4}
                value={notes}
                onChange={(e) =>
                  setNotes(e.target.value)
                }
                placeholder="Add instructions like fragile, call before delivery, etc."
              />
            </label>

            {/* DETECTED VEHICLE */}
            <div
              style={{
                padding: "18px",
                borderRadius: "18px",
                background: "#fff4b8",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              Suggested Vehicle: {suggestedVehicle}
            </div>

            {/* BUTTON */}
            <button type="submit">
              Continue Parcel Booking
            </button>
          </form>

          {/* VEHICLE INFO */}
          <aside className="vehicle-select">
            <h2>Available vehicles</h2>

            <div className="vehicle-grid">
              <button type="button">
                <strong>Bike</strong>

                <span>
                  Best for documents and food
                  delivery
                </span>
              </button>

              <button type="button">
                <strong>MiniCab / Pickup</strong>

                <span>
                  Suitable for grocery and medium
                  parcels
                </span>
              </button>

              <button type="button">
                <strong>MiniTruck</strong>

                <span>
                  Best for electronics and fragile
                  goods
                </span>
              </button>

              <button type="button">
                <strong>Truck</strong>

                <span>
                  Suitable for heavy and bulk
                  packages
                </span>
              </button>
            </div>
          </aside>
        </section>
      </section>
    </div>
  );
}