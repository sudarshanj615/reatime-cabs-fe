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
    <div className="bg-[#fffdf3]">
      <section className="mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] py-16 max-[520px]:py-10">
        <div className="grid gap-[18px] rounded-[34px] p-9 bg-white shadow-[0_18px_44px_rgba(0,0,0,0.08)] max-[760px]:p-7 max-[520px]:p-[22px] max-[520px]:rounded-3xl [&_h2]:m-0 [&_h2]:text-3xl [&_label]:grid [&_label]:gap-2 [&_label]:font-extrabold [&_input]:w-full [&_input]:border [&_input]:border-[#eadfbb] [&_input]:rounded-[18px] [&_input]:p-[15px_16px] [&_input]:bg-[#fffdf3] [&_input]:text-[#111] [&_select]:w-full [&_select]:border [&_select]:border-[#eadfbb] [&_select]:rounded-[18px] [&_select]:p-[15px_16px] [&_select]:bg-[#fffdf3] [&_select]:text-[#111] [&_textarea]:w-full [&_textarea]:border [&_textarea]:border-[#eadfbb] [&_textarea]:rounded-[18px] [&_textarea]:p-[15px_16px] [&_textarea]:bg-[#fffdf3] [&_textarea]:text-[#111] [&_textarea]:resize-y [&_button]:w-fit [&_button]:min-h-[54px] [&_button]:border-0 [&_button]:rounded-[18px] [&_button]:px-[34px] [&_button]:bg-[#111] [&_button]:text-white [&_button]:font-black [&_button]:cursor-pointer max-[520px]:[&_button]:w-full">
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
          <div className="grid gap-6 grid-cols-3 max-[900px]:grid-cols-1 max-[760px]:grid-cols-1">
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
          <div className="rounded-[18px] bg-[#fff4b8] p-[18px] text-lg font-bold">
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
