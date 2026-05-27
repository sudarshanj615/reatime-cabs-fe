"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import api from "@/lib/api/client";
import { ENDPOINTS } from "@/lib/api/endpoint";

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    accountType: "",
    queryType: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await api.post(
        ENDPOINTS.CONTACT.SUBMIT,
        formData
      );

      console.log(response.data);

      Swal.fire({
        icon: "success",
        title: "Query Submitted",
        text: "Your query has been submitted successfully!",
        confirmButtonText: "OK",
        background: "#fff",
        color: "#000",
      });

      setFormData({
        name: "",
        email: "",
        mobileNumber: "",
        accountType: "",
        queryType: "",
        comment: "",
      });

    } catch (error) {

      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Failed to submit the query. Please try again.",
        confirmButtonText: "OK",
        background: "#fff",
        color: "#000",
      });

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="bg-[#fffdf3]">

      <section className="py-[88px] bg-[#ffd232] text-[#111] max-[520px]:py-[54px]">

        <div className="mx-auto w-[min(1200px,calc(100%-40px))]">

          <h1 className="max-w-[720px] text-[clamp(42px,6vw,72px)] leading-none font-black">
            You can find us here
          </h1>

          <p className="max-w-[650px] mt-[18px] text-xl leading-[1.6]">
            Find help for your ride, driver account,
            payment, or safety queries.
          </p>

        </div>

      </section>

      <section className="mx-auto w-[min(1200px,calc(100%-40px))] grid grid-cols-[1.1fr_0.9fr] gap-[52px] py-[72px] max-[1100px]:grid-cols-1">

        <form
          onSubmit={handleSubmit}
          className="grid gap-[18px] rounded-[34px] p-9 bg-white shadow-[0_18px_44px_rgba(0,0,0,0.08)]"
        >

          <h2 className="text-[26px]">
            Find help for your queries here:
          </h2>

          <label className="grid gap-2 font-bold">

            Name *

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-[#eadfbb] rounded-[18px] p-[15px_16px] bg-[#fffdf3]"
              required
            />

          </label>

          <label className="grid gap-2 font-bold">

            Email Address *

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-[#eadfbb] rounded-[18px] p-[15px_16px] bg-[#fffdf3]"
              required
            />

          </label>

          <label className="grid gap-2 font-bold">

            Mobile Number *

            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full border border-[#eadfbb] rounded-[18px] p-[15px_16px] bg-[#fffdf3]"
              required
            />

          </label>

          <label className="grid gap-2 font-bold">

            You are a *

            <select
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              className="w-full border border-[#eadfbb] rounded-[18px] p-[15px_16px] bg-[#fffdf3]"
              required
            >

              <option value="" disabled>
                Select account type
              </option>

              <option value="Customer">
                Customer
              </option>

              <option value="Driver">
                Driver
              </option>

              <option value="Business Partner">
                Business Partner
              </option>

            </select>

          </label>

          <label className="grid gap-2 font-bold">

            Select Query *

            <select
              name="queryType"
              value={formData.queryType}
              onChange={handleChange}
              className="w-full border border-[#eadfbb] rounded-[18px] p-[15px_16px] bg-[#fffdf3]"
              required
            >

              <option value="" disabled>
                Select query
              </option>

              <option value="Ride Booking">
                Ride Booking
              </option>

              <option value="Payment Issue">
                Payment Issue
              </option>

              <option value="Driver Onboarding">
                Driver Onboarding
              </option>

              <option value="Safety Support">
                Safety Support
              </option>

            </select>

          </label>

          <label className="grid gap-2 font-bold">

            Comment *

            <textarea
              rows={5}
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full border border-[#eadfbb] rounded-[18px] p-[15px_16px] bg-[#fffdf3] resize-y"
              required
            />

          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-fit min-h-[54px] rounded-[18px] px-[34px] bg-[#F2B300] text-black font-black cursor-pointer"
          >

            {loading ? "Submitting..." : "Submit"}

          </button>

        </form>

        <aside className="grid gap-6 content-start rounded-[34px] p-9 bg-[#111] text-white shadow-[0_18px_44px_rgba(0,0,0,0.08)]">

          <div>
            <h3 className="text-[#ffd232] text-lg">
              Registered Office Address:
            </h3>

            <p className="text-[#f5edcc] leading-[1.7]">
              RealTimeCabs Mobility Pvt Ltd,
              3rd Floor, City Arcade,
              HSR Layout, Bangalore - 560102.
            </p>
          </div>

          <div>
            <h3 className="text-[#ffd232] text-lg">
              City Office:
            </h3>

            <p className="text-[#f5edcc] leading-[1.7]">
              RealTimeCabs Support Center,
              MG Road, Bengaluru,
              Karnataka - 560001.
            </p>
          </div>

          <div>
            <h3 className="text-[#ffd232] text-lg">
              Corporate Office:
            </h3>

            <p className="text-[#f5edcc] leading-[1.7]">
              RealTimeCabs Tower,
              Outer Ring Road, Bellandur,
              Bengaluru, Karnataka - 560103.
            </p>
          </div>

          <div className="flex flex-wrap gap-3.5">

            <a
              href="/signin?mode=login&role=user"
              className="inline-flex items-center justify-center min-h-[54px] rounded-full px-6 bg-[#ffd232] text-[#111] font-extrabold"
            >
              Customer app
            </a>

            <a
              href="/signin?mode=login&role=driver"
              className="inline-flex items-center justify-center min-h-[54px] rounded-full px-6 bg-[#ffd232] text-[#111] font-extrabold"
            >
              Captain app
            </a>

          </div>

        </aside>

      </section>

    </div>
  );
}