"use client";

import { useState } from "react";
import type { Coordinates } from "@/lib/map";

export function useLocation() {
  const [location, setLocation] = useState<Coordinates | null>(null);

  return { location, setLocation };
}
