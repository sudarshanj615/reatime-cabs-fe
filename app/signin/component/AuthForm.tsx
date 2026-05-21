"use client";

import axios from "axios";
import Link from "next/link";
import { FormEvent, useState } from "react";

type Role = "user" | "driver";
type Mode = "login" | "signup";

const endpoints = {
  user: {
    login: "http://192.168.1.4:8081/users/login",
    signup: "http://192.168.1.4:8081/users/signup",
  },

  driver: {
    login: "http://192.168.1.4:8081/drivers/login",
    signup: "http://192.168.1.4:8081/drivers/signup",
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

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = Object.fromEntries(
      formData.entries()
    );

    try {
      setLoading(true);

      const response = await axios.post(
        endpoints[role][mode],
        payload
      );

      console.log(response.data);

      setMessage(
        mode === "login"
          ? "Login successful"
          : "Account created successfully"
      );
    } catch (error) {
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* USER / DRIVER SWITCH */}
      <div className="account-switch">

        <Link
          href="/signin/user/login"
          className={
            role === "user"
              ? "active"
              : ""
          }
        >
          User
        </Link>

        <Link
          href="/signin/driver/login"
          className={
            role === "driver"
              ? "active"
              : ""
          }
        >
          Driver
        </Link>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="signin-form"
      >

        <label>
          Email Address
          <input
            type="email"
            name="email"
            className="input"
            placeholder="you@example.com"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Enter password"
            required
          />
        </label>

        {mode === "signup" && (
          <label>
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              className="input"
              placeholder="Confirm password"
              required
            />
          </label>
        )}

        {message && (
          <p className="muted">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="button"
          disabled={loading}
        >
          {loading
            ? "Please wait..."
            : mode === "login"
            ? `Sign In as ${role}`
            : `Create ${role} account`}
        </button>
      </form>

      {/* FOOTER */}
      <p className="signin-register">

        {mode === "login" ? (
          <>
            New here?{" "}

            <Link
              href={`/signin/${role}/signup`}
              className="link-button"
            >
              Create account
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}

            <Link
              href={`/signin/${role}/login`}
              className="link-button"
            >
              Sign in
            </Link>
          </>
        )}
      </p>
    </>
  );
}