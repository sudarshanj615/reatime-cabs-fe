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
    <aside className="admin-sidebar">
      <div>
        <Link href="/admin" className="sidebar-logo" aria-label="RealTimeCabs admin dashboard">
          <Image
            src="/logo/cablogosvg.svg"
            alt="RealTimeCabs"
            width={210}
            height={80}
            priority
          />
          <span>Admin console</span>
        </Link>

        <nav className="sidebar-menu">
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

      <button className="logout-btn">Logout</button>
    </aside>
  );
}
