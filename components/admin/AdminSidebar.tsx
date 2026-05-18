"use client";

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
        <h2 className="sidebar-logo">RealTimeCabs</h2>

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