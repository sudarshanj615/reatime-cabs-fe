"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import api from "@/lib/api/client";
import { ENDPOINTS } from "@/lib/api/endpoint";

import { MapPicker } from "@/components/MapPicker";

const parcelTypes = [
  "Documents",
  "Food",
  "Grocery",
  "Electronics",
  "Small Package (up to 5 kg)",
  "Large Package (up to 20 kg)",
];

const vehicleTypes = [
  { name: "BIKE", detail: "Fastest for small parcels up to 5 kg" },
  { name: "SCOOTY", detail: "Best for light packages" },
  { name: "AUTO", detail: "Medium parcels" },
  { name: "MINI_CAB", detail: "Fragile items" },
  { name: "PARCEL_VAN", detail: "Large parcels" },
];

const parcelTypeMap: Record<string, string> = {
  Documents: "DOCUMENT",
  Food: "FOOD",
  Grocery: "GROCERY",
  Electronics: "ELECTRONICS",
  "Small Package (up to 5 kg)": "PACKAGE",
  "Large Package (up to 20 kg)": "PACKAGE",
};

export default function ParcelPage() {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedParcelType, setSelectedParcelType] = useState("");

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [openPickupMap, setOpenPickupMap] = useState(false);
  const [openDropMap, setOpenDropMap] = useState(false);

  // AUTO VEHICLE ASSIGN
  useEffect(() => {
    if (!selectedParcelType) return;

    let autoVehicle = "";

    if (
      selectedParcelType === "Documents" ||
      selectedParcelType === "Food"
    ) {
      autoVehicle = "BIKE";
    } else if (
      selectedParcelType === "Grocery" ||
      selectedParcelType === "Small Package (up to 5 kg)"
    ) {
      autoVehicle = "SCOOTY";
    } else if (selectedParcelType === "Electronics") {
      autoVehicle = "MINI_CAB";
    } else if (
      selectedParcelType === "Large Package (up to 20 kg)"
    ) {
      autoVehicle = "PARCEL_VAN";
    }

    setSelectedVehicle(autoVehicle);
  }, [selectedParcelType]);

  // SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedParcelType)
      return Swal.fire(
        "Error",
        "Select parcel type",
        "warning"
      );

    if (!pickup || !drop)
      return Swal.fire(
        "Error",
        "Pickup/Drop required",
        "warning"
      );

    if (!/^\d{10}$/.test(phone))
      return Swal.fire(
        "Error",
        "Invalid phone number",
        "warning"
      );

    const bookingData = {
      parcelType: parcelTypeMap[selectedParcelType],
      pickupLocation: pickup,
      dropLocation: drop,
      vehicleType: selectedVehicle,
      receiverPhone: phone,
      notes: notes || "",
    };

    try {
      await api.post(
        ENDPOINTS.PARCEL.ADD,
        bookingData
      );

      Swal.fire(
        "Success",
        "Parcel Booked Successfully",
        "success"
      );

      setSelectedParcelType("");
      setPickup("");
      setDrop("");
      setPhone("");
      setNotes("");
      setSelectedVehicle("");
    } catch (err) {
      console.error(err);

      Swal.fire(
        "Error",
        "Backend error",
        "error"
      );
    }
  };

  return (
    <div className="bg-[#fffdf3] min-h-screen">

      {/* HERO SECTION */}
      <section className="mx-auto w-[min(1200px,calc(100%-40px))] pt-10">

        <div className="overflow-hidden rounded-[36px] border border-[#f0df9e] shadow-[0_12px_32px_rgba(12,12,12,0.12)] bg-white">

          <img
            src="/images/parcelbgimg.png"
            alt="Parcel Banner"
            className="w-full object-cover"
          />

        </div>

      </section>

      {/* MAIN SECTION */}
      <section className="mx-auto w-[min(1200px,calc(100%-40px))] grid grid-cols-[1.1fr_0.9fr] gap-[34px] py-[60px] max-[760px]:grid-cols-1">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-[18px] rounded-[34px] p-9 bg-white shadow-[0_18px_44px_rgba(0,0,0,0.08)]"
        >
          <h2 className="text-3xl font-bold">
            Book a parcel delivery
          </h2>

          {/* PARCEL TYPE */}
          <select
            value={selectedParcelType}
            onChange={(e) =>
              setSelectedParcelType(e.target.value)
            }
            className="border border-[#eadfbb] rounded-[18px] p-[15px] bg-[#fffdf3]"
          >
            <option value="">
              Select parcel type
            </option>

            {parcelTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {/* PICKUP */}
          <div className="relative">
            <input
              value={pickup}
              onChange={(e) =>
                setPickup(e.target.value)
              }
              placeholder="Pickup Location"
              className="w-full border border-[#eadfbb] rounded-[18px] p-[15px] pr-[50px] bg-[#fffdf3]"
            />

            <button
              type="button"
              onClick={() =>
                setOpenPickupMap(true)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F2B300] text-xl"
            >
              📍
            </button>

            {openPickupMap && (
              <MapPicker
                center={{
                  lat: 19.8762,
                  lng: 75.3433,
                }}
                onClose={() =>
                  setOpenPickupMap(false)
                }
                onSelect={(loc) => {
                  setPickup(loc);
                  setOpenPickupMap(false);
                }}
              />
            )}
          </div>

          {/* DROP */}
          <div className="relative">
            <input
              value={drop}
              onChange={(e) =>
                setDrop(e.target.value)
              }
              placeholder="Drop Location"
              className="w-full border border-[#eadfbb] rounded-[18px] p-[15px] pr-[50px] bg-[#fffdf3]"
            />

            <button
              type="button"
              onClick={() =>
                setOpenDropMap(true)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F2B300] text-xl"
            >
              📍
            </button>

            {openDropMap && (
              <MapPicker
                center={{
                  lat: 19.8762,
                  lng: 75.3433,
                }}
                onClose={() =>
                  setOpenDropMap(false)
                }
                onSelect={(loc) => {
                  setDrop(loc);
                  setOpenDropMap(false);
                }}
              />
            )}
          </div>

          {/* PHONE */}
          <input
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            placeholder="Receiver Phone"
            className="border border-[#eadfbb] rounded-[18px] p-[15px] bg-[#fffdf3]"
          />

          {/* NOTES */}
          <textarea
            value={notes}
            onChange={(e) =>
              setNotes(e.target.value)
            }
            placeholder="Notes"
            rows={3}
            className="border border-[#eadfbb] rounded-[18px] p-[15px] bg-[#fffdf3]"
          />

          {/* VEHICLE */}
          {selectedVehicle && (
            <div className="rounded-[18px] bg-[#fff4cc] border border-[#ffd54f] p-4">
              <p className="font-bold">
                Vehicle: {selectedVehicle}
              </p>
            </div>
          )}

          {/* BUTTON */}
          <button className="bg-[#FFC72C] font-black py-3 rounded-[18px] hover:scale-[1.01] transition">
            Confirm Booking
          </button>
        </form>

        {/* SIDE PANEL */}
        <aside className="grid gap-[18px] rounded-[34px] p-9 bg-white shadow-[0_18px_44px_rgba(0,0,0,0.08)]">

          <h2 className="text-2xl font-bold">
            Vehicle Options
          </h2>

          {vehicleTypes.map((v) => (
            <div
              key={v.name}
              className="border border-[#eadfbb] p-4 rounded-xl bg-[#fffdf3]"
            >
              <div className="font-bold">
                {v.name}
              </div>

              <div className="text-sm text-gray-600">
                {v.detail}
              </div>
            </div>
          ))}

        </aside>

      </section>
    </div>
  );
}