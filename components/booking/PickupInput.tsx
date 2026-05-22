"use client";

import { useState } from "react";
import { MapPicker } from "../MapPicker";

export function PickupInput() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Pickup location"
        className="w-full min-h-[54px] rounded-[10px] border border-[#eadfbb] bg-white/20 px-3 text-[#080808] outline-none focus:border-[#F2B300] focus:ring-2 focus:ring-yellow-200"
      />

      {/* MAP BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F2B300] text-xl"
      >
        📍
      </button>

      {open && (
        <MapPicker
          onClose={() => setOpen(false)}
          onSelect={(loc) => setValue(loc)}
        />
      )}
    </div>
  );
}