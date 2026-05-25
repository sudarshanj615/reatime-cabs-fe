"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", path: "/admin" },
    { name: "Users", path: "/admin/users" },
    { name: "Rides", path: "/admin/rides" },
    { name: "Drivers", path: "/admin/drivers" },
    { name: "Issues", path: "/admin/issues" },
    { name: "Payments", path: "/admin/payments" },
    { name: "Settings", path: "/admin/settings" },
  ];

  return (
    <aside className="w-[260px] min-h-screen bg-[#111827] text-white flex flex-col justify-between py-6 px-[18px] sticky top-0 max-[900px]:w-full max-[900px]:min-h-0 max-[900px]:relative">
      <div>
        <Link href="/admin" className="text-2xl font-bold mb-8 text-white" aria-label="RealTimeCabs admin dashboard">
          <Image
            src="/logo/cablogosvg.svg"
            alt="RealTimeCabs"
            width={190}
            height={80}
            priority
          />
          <span>Admin console</span>
        </Link>

        <nav className="flex flex-col gap-2 max-[900px]:flex-row max-[900px]:flex-wrap [&_.sidebar-link]:rounded-[10px] [&_.sidebar-link]:px-4 [&_.sidebar-link]:py-3 [&_.sidebar-link]:font-medium [&_.sidebar-link]:text-[#d1d5db] [&_.sidebar-link]:no-underline [&_.sidebar-link]:transition [&_.sidebar-link]:duration-200 [&_.sidebar-link]:ease-in [&_.sidebar-link:hover]:bg-bg-[#FFC72C] [&_.sidebar-link:hover]:text-white max-[900px]:[&_.sidebar-link]:text-sm [&_.active]:bg-[#FFC72C] [&_.active]:!text-black ">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`sidebar-link ${
                pathname === link.path ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <button  onClick={() => (window.location.href = "/")} className="border-0 bg-[#ffc836] text-black py-3 px-4 rounded-[10px] cursor-pointer font-semibold transition duration-200 ease-in hover:bg-[#dc2626] hover:text-white">Logout</button>
    </aside>
  );
}
