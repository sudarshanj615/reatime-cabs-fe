"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", path: "/admin" },
  { name: "Users", path: "/admin/users" },
  { name: "Rides", path: "/admin/rides" },
  { name: "Drivers", path: "/admin/drivers" },
  { name: "Issues", path: "/admin/issues" },
  { name: "Payments", path: "/admin/payments" },
  { name: "Settings", path: "/admin/settings" },
  {name : "Analytics", path: "/admin/analytics"},
  {name : "Notifications", path: "/admin/notifications"},
  {name : "Support", path: "/admin/support"}, 
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[260px] min-h-screen bg-[#111827] text-white flex flex-col justify-between py-6 px-[18px] sticky top-0 max-[900px]:w-full max-[900px]:min-h-0 max-[900px]:relative">

      {/* MENU */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-8 text-white">
          Admin Console
        </h2>

        <nav className="flex flex-col gap-2 max-[900px]:flex-row max-[900px]:flex-wrap
          [&_.sidebar-link]:rounded-[10px]
          [&_.sidebar-link]:px-4
          [&_.sidebar-link]:py-3
          [&_.sidebar-link]:font-medium
          [&_.sidebar-link]:text-[#d1d5db]
          [&_.sidebar-link]:no-underline
          [&_.sidebar-link]:transition
          [&_.sidebar-link]:duration-200
          [&_.sidebar-link]:ease-in
          [&_.sidebar-link:hover]:bg-[rgba(165,149,149,0.08)]
          [&_.sidebar-link:hover]:text-white
          max-[900px]:[&_.sidebar-link]:text-sm
          [&_.active]:bg-[#ffcc06]
          [&_.active]:text-black
        ">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`sidebar-link ${
                pathname === item.path ? "active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* LOGOUT */}
      <button
        onClick={() => (window.location.href = "/")}
        className="border-0 text-white py-3 px-4 rounded-[10px] cursor-pointer font-semibold transition duration-200 ease-in hover:text-[#ffcc06]"
      >
        Logout
      </button>
    </aside>
  );
}