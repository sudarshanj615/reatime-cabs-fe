"use client";

import { useState } from "react";

const parcelTypes = [
  "Documents",
  "Food",
  "Grocery",
  "Electronics",
  "Small Package (up to 5 kg)",
  "Large Package (up to 20 kg)",
];

const vehicleTypes = [
  { name: "Bike", detail: "Fastest for small parcels up to 5 kg" },
  { name: "Scooty", detail: "Best for light packages and quick city drops" },
  { name: "Auto", detail: "Useful for medium parcels and safer handling" },
  { name: "Mini Cab", detail: "For fragile parcels or multiple small boxes" },
];

export default function ParcelPage() {
  const [selectedVehicle, setSelectedVehicle] = useState("");

  return (
    <div className="bg-[#fffdf3]">
      <section className="py-[84px] bg-[#ffd232] max-[520px]:py-[54px] [&_h1]:max-w-[760px] [&_h1]:mt-[18px] [&_h1]:mb-0 [&_h1]:text-[clamp(42px,6vw,76px)] [&_h1]:leading-none [&_h1]:font-black [&_p]:max-w-[650px] [&_p]:mt-5 [&_p]:mb-0 [&_p]:text-[#242424] [&_p]:text-xl [&_p]:leading-[1.65]">
        <div className="mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] grid grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] gap-[42px] items-center max-[760px]:grid-cols-1">
          <div>
            <span className="w-fit rounded-full py-[10px] px-[18px] bg-[rgba(255,255,255,0.65)] text-[#0b0b0c] font-extrabold text-[13px] -translate-y-2 -mt-5 max-[520px]:py-2 max-[520px]:px-3 max-[520px]:text-[11px]">
              Parcel delivery
            </span>
            <h1>Send parcels across the city with RealTimeCabs.</h1>
            <p>
              Choose parcel type, pickup and drop locations, then select the
              right vehicle for quick delivery.
            </p>
          </div>

          <div className="grid gap-[10px] rounded-[34px] p-[34px] bg-[#111] text-white shadow-[0_24px_50px_rgba(0,0,0,0.18)] [&_strong]:text-[#ffd232] [&_strong]:text-[28px] [&_span]:text-[#f5edcc]">
            <strong>Live parcel booking</strong>
            <span>Bike, Scooty, Auto and Mini options</span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] grid grid-cols-[1.1fr_0.9fr] gap-[34px] py-[72px] max-[760px]:grid-cols-1 max-[520px]:py-11">
        <form className="grid gap-[18px] rounded-[34px] p-9 bg-white shadow-[0_18px_44px_rgba(0,0,0,0.08)] max-[760px]:p-7 max-[520px]:p-[22px] max-[520px]:rounded-3xl [&_h2]:m-0 [&_h2]:text-3xl [&_label]:grid [&_label]:gap-2 [&_label]:font-extrabold [&_input]:w-full [&_input]:border [&_input]:border-[#eadfbb] [&_input]:rounded-[18px] [&_input]:p-[15px_16px] [&_input]:bg-[#fffdf3] [&_input]:text-[#111] [&_select]:w-full [&_select]:border [&_select]:border-[#eadfbb] [&_select]:rounded-[18px] [&_select]:p-[15px_16px] [&_select]:bg-[#fffdf3] [&_select]:text-[#111] [&_textarea]:w-full [&_textarea]:border [&_textarea]:border-[#eadfbb] [&_textarea]:rounded-[18px] [&_textarea]:p-[15px_16px] [&_textarea]:bg-[#fffdf3] [&_textarea]:text-[#111] [&_textarea]:resize-y [&_button]:w-fit [&_button]:min-h-[54px] [&_button]:border-0 [&_button]:rounded-[18px] [&_button]:px-[34px] [&_button]:bg-[#111] [&_button]:text-white [&_button]:font-black [&_button]:cursor-pointer max-[520px]:[&_button]:w-full">
          <h2>Book a parcel delivery</h2>

          <label>
            Parcel Type
            <select defaultValue="">
              <option value="" disabled>
                Select parcel type
              </option>
              {parcelTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>

          <div className="grid gap-6 grid-cols-2 max-[900px]:grid-cols-1">
            <label>
              Pickup Location
              <input placeholder="Enter pickup address" />
            </label>

            <label>
              Drop Location
              <input placeholder="Enter drop address" />
            </label>
          </div>

          <label>
            Receiver Phone
            <input placeholder="Enter receiver mobile number" />
          </label>

          <label>
            Parcel Notes
            <textarea
              rows={4}
              placeholder="Add instructions like fragile, call before delivery, etc."
            />
          </label>

          <button type="submit">Continue Parcel Booking</button>
        </form>

        <aside className="grid gap-[18px] rounded-[34px] p-9 bg-white shadow-[0_18px_44px_rgba(0,0,0,0.08)] max-[760px]:p-7 max-[520px]:p-[22px] max-[520px]:rounded-3xl [&_h2]:m-0 [&_h2]:text-3xl">
          <h2>Select vehicle</h2>

          <div className="grid gap-3.5">
            {vehicleTypes.map((vehicle) => (
              <button
                type="button"
                key={vehicle.name}
                onClick={() => setSelectedVehicle(vehicle.name)}
                className={`grid gap-1.5 border rounded-[22px] p-[18px] text-left cursor-pointer transition ${
                  selectedVehicle === vehicle.name
                    ? "border-[#ffd232] bg-[#F2B300]"
                    : "border-[#eadfbb] bg-[#fffdf3]"
                }`}
              >
                <strong>{vehicle.name}</strong>
                <span>{vehicle.detail}</span>
              </button>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}