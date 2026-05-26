"use client";

import axios from "axios";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";

type Role = "user" | "driver";
type Mode = "login" | "signup";

const endpoints = {
  user: {
    login: "http://192.168.1.23:8081/users/login",
    signup: "http://192.168.1.23:8081/users/signup",
  },
  driver: {
    login: "http://192.168.1.23:8081/drivers/login",
    signup: "http://192.168.1.23:8081/drivers/signup",
  },
};

export default function AuthForm({
  role,
  mode,
}: {
  role: Role;
  mode: Mode;
}) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = Object.fromEntries(formData.entries());

    try {
      setLoading(true);

     const response = await axios.post(
  endpoints[role][mode],
  payload,
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);

      console.log(response.data);

      const successMessage =
        mode === "login"
          ? "Login successful"
          : "Account created successfully";

      setMessage(successMessage);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: successMessage,
        confirmButtonText: "OK",
        background: "#fff",
        color: "#000",
      });
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        "Something went wrong";

      setMessage(errorMessage);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
        confirmButtonText: "OK",
        background: "#fff",
        color: "#000",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* USER / DRIVER SWITCH */}
      <div className="grid grid-cols-2 gap-[10px] p-1.5 rounded-lg bg-[#f5f0df] mb-[15px] max-[520px]:grid-cols-1
      [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center
      [&_a]:min-h-[42px] [&_a]:rounded-lg
      [&_a]:bg-white
      [&_a]:!text-black
      [&_a]:font-extrabold
      [&_a]:transition-all
      [&_a:hover]:bg-[#ffd232]
      [&_a:hover]:!text-black
      [&_a.active]:bg-[#F5B800]
      [&_a.active]:!text-black">

        <Link
          href="/signin/user/login"
          className={role === "user" ? "active" : ""}
        >
          User
        </Link>

        <Link
          href="/signin/driver/login"
          className={role === "driver" ? "active" : ""}
        >
          Driver
        </Link>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 [&_label]:grid [&_label]:gap-2 [&_label]:text-[#0b0b0c] [&_label]:font-bold"
      >
        <label>
          Email Address
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)]"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)]"
            required
          />
        </label>

        {mode === "signup" && (
          <label>
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full min-h-[54px] border border-[#eadfbb] rounded-[10px] p-[10px] bg-[rgba(255,255,255,0.2)] text-[#080808] mt-[5px] outline-none focus:border-[#ffd232] focus:shadow-[0_0_0_3px_rgba(248,189,16,0.22)]"
              required
            />
          </label>
        )}

        {/* MESSAGE */}
        {message && (
          <p
            className={`text-sm mb-[15px] font-medium ${
              message.toLowerCase().includes("error") ||
              message.toLowerCase().includes("wrong")
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 min-h-[52px] rounded-[10px] bg-[#F2B300] text-[#0a0101] font-bold mt-[10px] transition shadow-[0_8px_18px_rgba(248,189,16,0.28)] disabled:opacity-70"
        >
          {loading
            ? "Please wait..."
            : mode === "login"
            ? `Sign In as ${role}`
            : `Create ${role} account`}
        </button>
      </form>

      {/* FOOTER */}
      <p className="text-[#5d5d5d] text-sm text-center mt-4">
        {mode === "login" ? (
          <>
            New here?{" "}
            <Link href={`/signin/${role}/signup`}>
              Create account
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href={`/signin/${role}/login`}>
              Sign in
            </Link>
          </>
        )}
      </p>
    </>
  );
}