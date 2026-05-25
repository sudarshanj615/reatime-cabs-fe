"use client";

import axios from "axios";
import { FormEvent, useState } from "react";

import { DropInput } from "@/components/booking/DropInput";
import { PickupInput } from "@/components/booking/PickupInput";
import { RideSearchBar } from "@/components/booking/RideSearchBar";
import { ConfirmRideButton } from "@/components/booking/ConfirmRideButton";

export default function AdminCreateRidePage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(
      e.currentTarget
    );

    const payload = {
      pickup: formData.get("pickup"),
      drop: formData.get("drop"),
    };

    try {
      setLoading(true);

      const response = await axios.post(
        "http://192.168.1.23:8081/rides/create",
        payload
      );

      console.log(response.data);

      setMessage("Ride created successfully");
    } catch (error: any) {
      console.log(error);

      setMessage(
        error?.response?.data?.message ||
          "Failed to create ride"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 flex flex-col gap-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-extrabold text-black">
          Create Ride
        </h1>

        <p className="mt-2 text-gray-500 text-base">
          Admin can create rides on behalf of customers and drivers.
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-lg p-8 max-w-4xl grid gap-6 border border-gray-100"
      >

        {/* Search Bar */}
        <RideSearchBar />

        {/* Hidden Inputs */}
        <input
          type="hidden"
          name="pickup"
          value=""
        />

        <input
          type="hidden"
          name="drop"
          value=""
        />

        {/* Pickup & Drop */}
        <div className="grid grid-cols-2 gap-6 max-[768px]:grid-cols-1">

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-800">
              Pickup Location
            </label>

            <PickupInput />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-800">
              Drop Location
            </label>

            <DropInput />
          </div>

        </div>

        {/* Message */}
        {message && (
          <div
            className={`rounded-xl px-4 py-3 text-sm font-semibold ${
              message.toLowerCase().includes("failed") ||
              message.toLowerCase().includes("error")
                ? "bg-red-100 text-red-600"
                : "bg-green-100 text-green-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="disabled:opacity-60"
        >
          <ConfirmRideButton />
        </button>

      </form>
    </div>
  );
}