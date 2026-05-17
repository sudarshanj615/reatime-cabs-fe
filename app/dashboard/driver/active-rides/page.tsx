import { DriverTracker } from "@/components/realtime/DriverTracker";
import { RideStatus } from "@/components/realtime/RideStatus";
import { PageHeader } from "@/components/common/PageHeader";

export default function ActiveRidesPage() {
  return (
    <div className="page-shell container stack">
      <PageHeader title="Active Rides" description="Realtime requests assigned to your driver account." />
      <div className="grid grid-2">
        <RideStatus status="Waiting for nearby requests" />
        <DriverTracker />
      </div>
    </div>
  );
}
