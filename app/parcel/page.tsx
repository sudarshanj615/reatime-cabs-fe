"use client";

import { useState } from "react";
import { MapPicker } from "@/components/MapPicker";
import Swal from "sweetalert2";

const parcelTypes = [
  "Documents",
  "Food",
  "Grocery",
  "Electronics",
  "Small Package (up to 5 kg)",
  "Large Package (up to 20 kg)",
];

const vehicleTypes = [
  { name: "Bike 🏍", detail: "Fastest for small parcels up to 5 kg" },
  { name: "Scooty 🛵", detail: "Best for light packages and quick city drops" },
  { name: "Auto 🛺", detail: "Useful for medium parcels and safer handling" },
  { name: "Mini Cab 🚕", detail: "For fragile parcels or multiple small boxes" },
  { name: "Parcel Van 🚚", detail: "For fragile parcels or multiple small boxes" },
];

export default function ParcelPage() {
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [phone, setPhone] = useState("");

  const [openPickupMap, setOpenPickupMap] = useState(false);
  const [openDropMap, setOpenDropMap] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!pickup.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Pickup location is required",
        confirmButtonText: "OK",
        background: "#fff",
        color: "#000",
      });
      return;
    }
    if (!drop.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Drop location is required",
        confirmButtonText: "OK",
        background: "#fff",
        color: "#000",
      });
      return;
    }
    if (!selectedVehicle) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please select a vehicle",
        confirmButtonText: "OK",
        background: "#fff",
        color: "#000",
      });
      return;
    }
    if (!phone.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Receiver phone number is required",
        confirmButtonText: "OK",
        background: "#fff",
        color: "#000",
      });
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Input",
        text: "Phone must be exactly 10 digits",
        confirmButtonText: "OK",
        background: "#fff",
        color: "#000",
      });
      return;
    }

    console.log({ pickup, drop, vehicle: selectedVehicle, phone });

    Swal.fire({
      icon: "success",
      title: "Parcel Booked",
      text: "Your parcel has been booked successfully!",
      confirmButtonText: "OK",
      background: "#fff",
      color: "#000",
    });
  };

  return (
    <div className="bg-[#fffdf3]">

      {/* HERO - FULL IMAGE (NO YELLOW) */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden  bg-[#fffdf3]">

        {/* optional soft glow background */}
        <div className="absolute w-[500px] h-[500px]  bg-[#fffdf3] blur-3xl rounded-full"></div>

        {/* BIG IMAGE */}
        <img
          src="/images/parcelbgimg.png"
          alt="Parcel"
          className="relative w-full h-full object-contain scale-110 drop-shadow-2xl"
        />

      </section>

      {/* FORM + VEHICLES (UNCHANGED) */}
      <section className="mx-auto w-[min(1200px,calc(100%-40px))] grid grid-cols-[1.1fr_0.9fr] gap-[34px] py-[72px] max-[760px]:grid-cols-1">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-[18px] rounded-[34px] p-9 bg-white shadow-[0_18px_44px_rgba(0,0,0,0.08)]"
        >
          <h2 className="text-3xl font-bold">Book a parcel delivery</h2>

          <label className="grid gap-2 font-extrabold">
            Parcel Type
            <select className="border border-[#eadfbb] rounded-[18px] p-[15px] bg-[#fffdf3]">
              <option value="">Select parcel type</option>
              {parcelTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>

          <div className="grid gap-6 grid-cols-2 max-[900px]:grid-cols-1">

            <label className="grid gap-2 font-extrabold relative">
              Pickup Location

              <input
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="border border-[#eadfbb] rounded-[18px] p-[15px] bg-[#fffdf3]"
                placeholder="Enter pickup address"
              />

              <button
                type="button"
                onClick={() => setOpenPickupMap(true)}
                className="absolute right-4 top-[42px] text-[#F2B300] text-xl"
              >
                📍
              </button>

              {openPickupMap && (
                <MapPicker
                  onClose={() => setOpenPickupMap(false)}
                  onSelect={(loc) => setPickup(loc)}
                />
              )}
            </label>

            <label className="grid gap-2 font-extrabold relative">
              Drop Location

              <input
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="border border-[#eadfbb] rounded-[18px] p-[15px] bg-[#fffdf3]"
                placeholder="Enter drop address"
              />

              <button
                type="button"
                onClick={() => setOpenDropMap(true)}
                className="absolute right-4 top-[42px] text-[#F2B300] text-xl"
              >
                📍
              </button>

              {openDropMap && (
                <MapPicker
                  onClose={() => setOpenDropMap(false)}
                  onSelect={(loc) => setDrop(loc)}
                />
              )}
            </label>

          </div>

          <label className="grid gap-2 font-extrabold">
            Receiver Phone
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-[#eadfbb] rounded-[18px] p-[15px] bg-[#fffdf3]"
              placeholder="Enter 10-digit mobile number"
            />
          </label>

          <label className="grid gap-2 font-extrabold">
            Parcel Notes
            <textarea
              rows={4}
              className="border border-[#eadfbb] rounded-[18px] p-[15px] bg-[#fffdf3]"
              placeholder="Add instructions"
            />
          </label>

          <button
            type="submit"
            className="w-fit min-h-[54px] px-[34px] rounded-[18px] bg-[#FFC72C] text-black font-black"
          >
            Confirm Parcel Booking
          </button>
        </form>

        {/* VEHICLES */}
        <aside className="grid gap-[18px] rounded-[34px] p-9 bg-white shadow-[0_18px_44px_rgba(0,0,0,0.08)]">

          <h2 className="text-3xl font-bold">Select vehicle</h2>

          <div className="grid gap-3.5">
            {vehicleTypes.map((vehicle) => (
              <button
                key={vehicle.name}
                type="button"
                onClick={() => setSelectedVehicle(vehicle.name)}
                className={`grid gap-1.5 border rounded-[22px] p-[18px] text-left transition ${
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