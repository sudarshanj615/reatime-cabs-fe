"use client";

import axios from "axios";
import { FormEvent, useState } from "react";

export default function CreateUserPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      password: formData.get("password"),
      //confirmPassword: formData.get("confirmPassword"),
    };

    try {
      setLoading(true);

      const response = await axios.post(
        "http://192.168.1.23:8081/users/signup",
        payload
      );

      console.log(response.data);

      setMessage("Customer account created successfully");
    } catch (error: any) {
      console.log(error);

      setMessage(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 flex flex-col gap-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-extrabold text-black">
          Create Customer Account
        </h1>

        <p className="mt-2 text-gray-500 text-base">
          Create accounts on behalf of customers
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-lg p-8 max-w-3xl grid gap-6 border border-gray-100"
      >

        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-800">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            required
            placeholder="Enter customer name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-800">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            required
            placeholder="Enter phone number"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-800">
            Email
          </label>

          <input
            type="email"
            name="email"
            required
            placeholder="Enter email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-800">
            Temporary Password
          </label>

          <input
            type="password"
            name="password"
            required
            placeholder="Enter password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition"
          />
        </div>

        {/* Confirm Password */}
        {/* <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-800">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirm password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition"
          />
        </div> */}

        {/* Message */}
        {message && (
          <div
            className={`rounded-xl px-4 py-3 text-sm font-semibold ${
              message.toLowerCase().includes("wrong") ||
              message.toLowerCase().includes("error")
                ? "bg-red-100 text-red-600"
                : "bg-green-100 text-green-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl transition disabled:opacity-60"
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
        </button>

      </form>
    </div>
  );
}