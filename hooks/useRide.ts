"use client";

import { useState } from "react";
import type { Ride } from "@/types/ride";

export function useRide() {
  const [ride, setRide] = useState<Ride | null>(null);

  return { ride, setRide };
}
