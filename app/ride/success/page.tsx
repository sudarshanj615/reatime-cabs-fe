import Link from "next/link";

export default function RideSuccessPage() {
  return (
    <div className="page-shell container">
      <div className="card stack">
        <h1>Ride booked successfully</h1>
        <p className="muted">Your driver will be assigned in realtime.</p>
        <Link className="button" href="/ride/live/demo-ride">
          Track Ride
        </Link>
      </div>
    </div>
  );
}
