import Link from "next/link";

export function ConfirmRideButton() {
  return (
    <Link className="button" href="/ride/success">
      Confirm Ride
    </Link>
  );
}
