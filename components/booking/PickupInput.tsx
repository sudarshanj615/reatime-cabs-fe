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

export function PickupInput({
  value,
  onChange,
  setCoordinates,
}: Props) {

  const [open, setOpen] =
    useState(false);

  /* CURRENT USER LOCATION */
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
          onChange(e.target.value)
        }
        placeholder="Pickup location"
        className="w-full min-h-[54px] rounded-[10px] border border-[#eadfbb] bg-white/20 px-3 pr-10 text-[#080808]"
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

              /* COORDS OBJECT */
              const coords = {
                lat: latitude,
                lng: longitude,
              };

              /* SAVE TO PARENT */
              setCoordinates(
                coords
              );

              /* SAVE LOCALLY */
              setCurrentLocation(
                coords
              );

              console.log(
                latitude,
                longitude
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