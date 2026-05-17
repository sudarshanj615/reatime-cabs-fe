import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";

export default function UserDashboardPage() {
  return (
    <div className="page-shell container stack">
      <PageHeader title="User Dashboard" description="Book rides, view trip status, and manage your RealTimeCabs profile." />
      <div className="grid grid-3">
        <Link className="card" href="/dashboard/user/book-ride">
          <h3>Book a Ride</h3>
          <p className="muted">Search pickup and drop locations.</p>
        </Link>
        <Link className="card" href="/dashboard/user/ride-history">
          <h3>Ride History</h3>
          <p className="muted">Review completed and cancelled rides.</p>
        </Link>
        <Link className="card" href="/dashboard/user/profile">
          <h3>Profile</h3>
          <p className="muted">Update your contact details.</p>
        </Link>
      </div>
    </div>
  );
}
