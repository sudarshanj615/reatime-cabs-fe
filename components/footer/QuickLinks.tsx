import Link from "next/link";

export function QuickLinks() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Book Ride", href: "/dashboard/user/book-ride" },
    { label: "Parcel", href: "/parcel" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    // { label: "Support", href: "/support" },
  ];

  return (
    <ul className="footer-link-list">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export function AccountLinks() {
  const links = [
    { label: "User Login", href: "/signin?mode=login&role=user" },
    { label: "Driver Login", href: "/signin?mode=login&role=driver" },
    { label: "User Register", href: "/signin?mode=signup&role=user" },
    { label: "Driver Register", href: "/signin?mode=signup&role=driver" },
    { label: "Ride History", href: "/dashboard/user/ride-history" },
  ];

  return (
    <ul className="footer-link-list">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export function ServiceLinks() {
  const links = [
    { label: "Mini Cab", href: "/dashboard/user/book-ride" },
    { label: "Auto Ride", href: "/dashboard/user/book-ride" },
    { label: "Bike Ride", href: "/dashboard/user/book-ride" },
    { label: "Scooty Ride", href: "/dashboard/user/book-ride" },
    { label: "SUV Ride", href: "/dashboard/user/book-ride" },
    // { label: "Parcel Delivery", href: "/parcel" },
  ];

  return (
    <ul className="footer-link-list">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
