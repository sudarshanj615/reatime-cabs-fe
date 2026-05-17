import { LiveMap } from "@/components/realtime/LiveMap";
import { RideStatus } from "@/components/realtime/RideStatus";

export default async function LiveRidePage({
  params,
}: {
  params: Promise<{ rideId: string }>;
}) {
  const { rideId } = await params;

  return (
    <div className="page-shell container stack">
      <h1>Live Ride #{rideId}</h1>
      <div className="grid grid-2">
        <LiveMap />
        <RideStatus status="Driver is on the way" />
      </div>
    </div>
  );
}
