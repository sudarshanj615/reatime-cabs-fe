"use client";

import { useState } from "react";

export default function ParcelDimensionsPage() {
  // STATES
  const [weight, setWeight] = useState("");
  const [quantity, setQuantity] = useState("");

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const [instructions, setInstructions] = useState("");

  // PACKAGE DETECTION
  let packageType = "Fill all package details";

  const allFieldsFilled =
    weight !== "" &&
    quantity !== "" &&
    length !== "" &&
    width !== "" &&
    height !== "";

  if (allFieldsFilled) {
    const weightValue = Number(weight);

    const volume =
      Number(length) *
      Number(width) *
      Number(height);

    // SMALL PACKAGE
    if (weightValue <= 5 && volume <= 50000) {
      packageType = "Small Package";
    }

    // MEDIUM PACKAGE
    else if (
      weightValue > 5 &&
      weightValue <= 15 &&
      volume <= 150000
    ) {
      packageType = "Medium Package";
    }

    // LARGE PACKAGE
    else if (weightValue > 15) {
      packageType = "Large Package";
    }
    else {
      packageType = "Large Package";
    }
  }

  return (
    <div className="parcel-page">
      <section className="container page-shell">
        <div className="parcel-form">
          <h2>Enter Package Dimensions</h2>

          {/* WEIGHT */}
          <label>
            Parcel Weight (kg)

            <input
              type="number"
              min="0"
              value={weight}
              onChange={(e) =>
                setWeight(e.target.value)
              }
              placeholder="Enter parcel weight"
            />
          </label>

          {/* QUANTITY */}
          <label>
            Parcel Quantity

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value)
              }
              placeholder="Enter parcel quantity"
            />
          </label>

          {/* DIMENSIONS */}
          <div className="grid grid-3">
            {/* LENGTH */}
            <label>
              Length (ft)

              <input
                type="number"
                min="0"
                value={length}
                onChange={(e) =>
                  setLength(e.target.value)
                }
                placeholder="Length"
              />
            </label>

            {/* WIDTH */}
            <label>
              Width (ft)

              <input
                type="number"
                min="0"
                value={width}
                onChange={(e) =>
                  setWidth(e.target.value)
                }
                placeholder="Width"
              />
            </label>

            {/* HEIGHT */}
            <label>
              Height (ft)

              <input
                type="number"
                min="0"
                value={height}
                onChange={(e) =>
                  setHeight(e.target.value)
                }
                placeholder="Height"
              />
            </label>
          </div>

          {/* INSTRUCTIONS */}
          <label>
            Additional Instructions

            <textarea
              rows={4}
              value={instructions}
              onChange={(e) =>
                setInstructions(e.target.value)
              }
              placeholder="Fragile, handle carefully, call before delivery, etc."
            />
          </label>

          {/* DETECTED PACKAGE */}
          <div
            style={{
              padding: "18px",
              borderRadius: "18px",
              background: "#fff4b8",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            Detected Package Type: {packageType}
          </div>

          {/* BUTTON */}
          <button type="submit">
            Continue Booking
          </button>
        </div>
      </section>
    </div>
  );
}