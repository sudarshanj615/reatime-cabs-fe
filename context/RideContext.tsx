"use client";

import { createContext, useContext, useState } from "react";
import type { Ride } from "@/types/ride";

type RideContextValue = {
  ride: Ride | null;
  setRide: (ride: Ride | null) => void;
};

const RideContext = createContext<RideContextValue | null>(null);

export function RideProvider({ children }: { children: React.ReactNode }) {
  const [ride, setRide] = useState<Ride | null>(null);

  return <RideContext.Provider value={{ ride, setRide }}>{children}</RideContext.Provider>;
}

export function useRideContext() {
  const context = useContext(RideContext);

  if (!context) {
    throw new Error("useRideContext must be used inside RideProvider");
  }

  return context;
}
