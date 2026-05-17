"use client";

import { useRouter } from "next/navigation";
import { DriverLoginForm } from "@/components/auth/DriverLoginForm";

export default function DriverLoginPage() {

  const router = useRouter();

  const handleLogin = () => {
    router.push("/profile");
  };

  return (
    <DriverLoginForm onLogin={handleLogin} />
  );
}