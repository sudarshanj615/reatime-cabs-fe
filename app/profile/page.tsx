"use client";

import { customerUser } from "../../constants/user";
import { useState } from "react";

export default function ProfilePage() {
  const user = customerUser;

  const [hoverEdit, setHoverEdit] = useState(false);
  const [hoverLogout, setHoverLogout] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-5 py-10">
      <div className="mx-auto max-w-[950px] rounded-3xl bg-white p-[34px] shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        {/* Heading */}
        <h1 className="mb-10 text-[42px] font-extrabold text-[#111]">
          Personal info
        </h1>

        {/* Profile Section */}
        <div className="mb-10 flex items-center gap-6">
          {/* Profile Icon */}
          <div className="relative h-[120px] w-[120px]">
            <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#e5e5e5] text-[60px]">
              ðŸ‘¤
            </div>

            {/* Edit Icon */}
            <div className="absolute bottom-0 right-0 flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full bg-white text-lg shadow-[0_4px_10px_rgba(0,0,0,0.12)]">
              âœŽ
            </div>
          </div>
        </div>

        {/* Information List */}
        <div className="grid">
          {/* Name */}
          <div className="flex items-center justify-between border-b border-[#e5e5e5] py-[22px]">
            <div>
              <p className="m-0 text-xl font-bold">Name</p>
              <p className="mt-2 text-lg text-[#666]">{user.name}</p>
            </div>

            <span className="text-[28px] text-[#999]">â€º</span>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between border-b border-[#e5e5e5] py-[22px]">
            <div>
              <p className="m-0 text-xl font-bold">Phone number</p>
              <p className="mt-2 text-lg text-[#666]">{user.phone}</p>
            </div>

            <span className="text-[28px] text-[#999]">â€º</span>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between border-b border-[#e5e5e5] py-[22px]">
            <div>
              <p className="m-0 text-xl font-bold">Email</p>
              <p className="mt-2 text-lg text-[#666]">{user.email}</p>
            </div>

            <span className="text-[28px] text-[#999]">â€º</span>
          </div>

          {/* Role */}
          <div className="flex items-center justify-between py-[22px]">
            <div>
              <p className="m-0 text-xl font-bold">Role</p>
              <p className="mt-2 text-lg text-[#666]">{user.role}</p>
            </div>

            <span className="text-[28px] text-[#999]">â€º</span>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-[18px]">
          {/* EDIT PROFILE */}
          <button
            onMouseEnter={() => setHoverEdit(true)}
            onMouseLeave={() => setHoverEdit(false)}
            className={`min-h-14 flex-1 cursor-pointer rounded-[14px] border-0 text-[17px] font-bold text-white transition duration-300 ease-in-out ${hoverEdit ? "scale-[1.02] bg-[#333]" : "scale-100 bg-[#111]"}`}
          >
            Edit Profile
          </button>

          {/* LOGOUT */}
          <button
            onMouseEnter={() => setHoverLogout(true)}
            onMouseLeave={() => setHoverLogout(false)}
            className={`min-h-14 flex-1 cursor-pointer rounded-[14px] border-0 text-[17px] font-bold text-[#111] transition duration-300 ease-in-out ${hoverLogout ? "scale-[1.02] bg-[#ffdb4d]" : "scale-100 bg-[#ffd232]"}`}
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
