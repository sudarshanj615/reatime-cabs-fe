import Link from "next/link";

export function SearchRideBox() {
  return (
    <div className="ride-box glass-box">
      <input className="input" placeholder="Enter pickup location" />
      <input className="input" placeholder="Enter drop location" />
      <Link className="button" href="/dashboard/user/book-ride">
        Book Now
      </Link>
    </div>
  );
}
