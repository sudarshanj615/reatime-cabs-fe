import { DriverTracker } from "@/components/realtime/DriverTracker";
import { RideStatus } from "@/components/realtime/RideStatus";
import { PageHeader } from "@/components/common/PageHeader";

export default function ActiveRidesPage() {
  return (
    <div className="py-16 max-[520px]:py-10 mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] grid gap-[18px]">
      <PageHeader title="Active Rides" description="Realtime requests assigned to your driver account." />
      <div className="grid gap-6 grid-cols-2 max-[900px]:grid-cols-1 max-[760px]:grid-cols-1">
        <RideStatus status="Waiting for nearby requests" />
        <DriverTracker />
      </div>
    </div>
  );
}
