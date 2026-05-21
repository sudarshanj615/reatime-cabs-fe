"use client";

import { useMemo } from "react";

export function useSocket() {
  return useMemo(() => ({ connected: false, provider: "placeholder" }), []);
}
