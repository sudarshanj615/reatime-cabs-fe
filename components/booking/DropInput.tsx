"use client";

import { useState } from "react";

import { MapPicker } from "../MapPicker";

type Props = {
  value: string;

  onChange: (
    val: string
  ) => void;

  setCoordinates: (
    coords: {
      lat: number;
      lng: number;
    }
  ) => void;
};

export function DropInput({
  value,
  onChange,
  setCoordinates,
}: Props) {

  const [open, setOpen] =
    useState(false);

  const [
    currentLocation,
    setCurrentLocation,
  ] = useState({
    lat: 0,
    lng: 0,
  });

  return (
    <div className="relative w-full">

      {/* INPUT */}
      <input
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        placeholder="Drop location"
        className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)] max-[520px]:w-full"
      />

      {/* MAP BUTTON */}
      <button
        type="button"
        onClick={() => {

          if (
            !navigator.geolocation
          ) {
            alert(
              "Geolocation not supported"
            );

            return;
          }

          navigator.geolocation.getCurrentPosition(

            (position) => {

              const latitude =
                position.coords.latitude;

              const longitude =
                position.coords.longitude;

              const coords = {
                lat: latitude,
                lng: longitude,
              };

              /* SAVE COORDS */
              setCoordinates(
                coords
              );

              /* LOCAL STATE */
              setCurrentLocation(
                coords
              );

              /* OPEN MAP */
              setOpen(true);
            },

            (error) => {

              console.log(error);

              alert(
                "Unable to fetch current location"
              );
            },

            {
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0,
            }
          );
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F2B300] text-xl"
      >
        📍
      </button>

      {/* MAP PICKER */}
      {open && (
        <MapPicker
          center={
            currentLocation
          }
          onClose={() =>
            setOpen(false)
          }
          onSelect={(loc) => {

            onChange(loc);

            setOpen(false);
          }}
        />
      )}

    </div>
  );
}