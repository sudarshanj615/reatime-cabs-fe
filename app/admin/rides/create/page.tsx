"use client";

import axios from "axios";
import { FormEvent, useState } from "react";

import { CabSelector } from "@/components/booking/CabSelector";
import { DropInput } from "@/components/booking/DropInput";
import { FareEstimate } from "@/components/booking/FareEstimate";
import { PickupInput } from "@/components/booking/PickupInput";
import { RideSearchBar } from "@/components/booking/RideSearchBar";
import { ConfirmRideButton } from "@/components/booking/ConfirmRideButton";
import { PageHeader } from "@/components/common/PageHeader";

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
      cabType: formData.get("cabType"),
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
    <div className="py-16 max-[520px]:py-10 mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] grid gap-[18px]">

      {/* PAGE HEADER */}
      <PageHeader
        title="Create Ride"
        description="Admin can create rides on behalf of customers."
      />

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:p-5 max-[520px]:rounded-[20px] grid gap-[18px]"
      >

        {/* SEARCH BAR */}
        <RideSearchBar />

        {/* PICKUP & DROP */}
        <div className="grid gap-6 grid-cols-2 max-[900px]:grid-cols-1 max-[760px]:grid-cols-1">

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

          <PickupInput />
          <DropInput />
        </div>

        {/* CAB SELECTOR */}
        <div>
          <input
            type="hidden"
            name="cabType"
            value=""
          />

          <CabSelector />
        </div>

        {/* FARE */}
        <FareEstimate />

        {/* MESSAGE */}
        {message && (
          <div
            className={`rounded-xl px-4 py-3 font-semibold ${
              message.toLowerCase().includes("failed")
                ? "bg-red-100 text-red-600"
                : "bg-green-100 text-green-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* CONFIRM BUTTON */}
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