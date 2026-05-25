"use client";

import { useState } from "react";
import { MapPicker } from "../MapPicker";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export function DropInput({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">

      {/* INPUT */}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Drop location"
        className="w-full min-h-[54px] rounded-[10px] border border-[#eadfbb] bg-white/20 px-3 pr-10 text-[#080808]"
      />

      {/* MAP BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F2B300] text-xl"
      >
        📍
      </button>

      {/* MAP PICKER */}
      {open && (
        <MapPicker
          onClose={() => setOpen(false)}
          onSelect={(loc) => {
            onChange(loc);
            setOpen(false);
          }}
        />
      )}

    </div>
  );
}