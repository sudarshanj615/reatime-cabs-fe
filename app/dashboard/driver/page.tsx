import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";

export default function DriverDashboardPage() {
  return (
    <div className="page-shell container stack">
      <PageHeader title="Driver Dashboard" description="Accept rides, track earnings, and manage your driver profile." />
      <div className="grid grid-3">
        <Link className="card" href="/dashboard/driver/active-rides">
          <h3>Active Rides</h3>
          <p className="muted">View incoming and ongoing ride requests.</p>
        </Link>
        <Link className="card" href="/dashboard/driver/earnings">
          <h3>Earnings</h3>
          <p className="muted">Track today, weekly, and monthly income.</p>
        </Link>
        <Link className="card" href="/dashboard/driver/profile">
          <h3>Profile</h3>
          <p className="muted">Update vehicle and document details.</p>
        </Link>
      </div>
    </div>
  );
}
