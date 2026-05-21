"use client";

import { customerUser } from "../../constants/user";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [hoverEdit, setHoverEdit] = useState(false);
  const [hoverLogout, setHoverLogout] = useState(false);

  // ✅ Make user editable state (IMPORTANT FIX)
  const [user, setUser] = useState({
    name: customerUser.name,
    phone: customerUser.phone,
    email: customerUser.email,
    role: customerUser.role,
  });

  const [image, setImage] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-5 py-10">
      <div className="mx-auto max-w-[950px] rounded-3xl bg-white p-[34px] shadow-[0_8px_24px_rgba(0,0,0,0.06)]">

        {/* TITLE */}
        <h1 className="mb-10 text-[42px] font-extrabold text-[#111]">
          Personal info
        </h1>

        {/* PROFILE IMAGE */}
        <div className="mb-10 flex items-center gap-6">
          <div className="relative h-[120px] w-[120px]">

            <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#e5e5e5] overflow-hidden">
              {image ? (
                <img
                  src={image}
                  className="h-full w-full object-cover"
                  alt="profile"
                />
              ) : (
                <span className="text-[60px]">👤</span>
              )}
            </div>

            <label className="absolute bottom-0 right-0 flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full bg-white shadow">
              ✎
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        {/* FIELDS */}
        <div className="grid gap-6">

          {/* NAME */}
          <input
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="w-full border border-[#ddd] rounded-xl px-4 py-3 text-lg text-black"
            placeholder="Name"
          />

          {/* PHONE */}
          <input
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            className="w-full border border-[#ddd] rounded-xl px-4 py-3 text-lg text-black"
            placeholder="Phone"
          />

          {/* EMAIL */}
          <input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full border border-[#ddd] rounded-xl px-4 py-3 text-lg text-black"
            placeholder="Email"
          />

          {/* ROLE */}
          <input
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
            className="w-full border border-[#ddd] rounded-xl px-4 py-3 text-lg text-black"
            placeholder="Role"
          />
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-[18px]">

          {/* EDIT */}
          <button
            onClick={() => setEditMode(!editMode)}
            onMouseEnter={() => setHoverEdit(true)}
            onMouseLeave={() => setHoverEdit(false)}
            className={`min-h-14 flex-1 rounded-[14px] text-[17px] font-bold text-white transition ${
              hoverEdit ? "bg-[#333] scale-[1.02]" : "bg-[#111]"
            }`}
          >
            Save Profile
          </button>

          {/* LOGOUT */}
          <button
            onClick={() => router.push("/")}
            onMouseEnter={() => setHoverLogout(true)}
            onMouseLeave={() => setHoverLogout(false)}
            className={`min-h-14 flex-1 rounded-[14px] text-[17px] font-bold text-[#111] transition ${
              hoverLogout
                ? "bg-[#ffdb4d] scale-[1.02]"
                : "bg-[#ffd232]"
            }`}
          >
            Logout
          </button>

        </div>
      </div>
    </main>
  );
}