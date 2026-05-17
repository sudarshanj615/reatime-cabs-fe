"use client";

import { useRouter } from "next/navigation";
import { UserLoginForm } from "@/components/auth/UserLoginForm";

export default function UserLoginPage() {

  const router = useRouter();

  const handleLogin = () => {
    router.push("/profile");
  };

  return (
    <UserLoginForm onLogin={handleLogin} />
  );
}