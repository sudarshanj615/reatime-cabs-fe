"use client";

import { useState } from "react";
import type { User } from "@/types/user";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  return {
    user,
    isLoggedIn: Boolean(user),
    setUser,
  };
}
