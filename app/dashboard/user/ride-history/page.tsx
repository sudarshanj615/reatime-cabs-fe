import { EmptyState } from "@/components/common/EmptyState";
import { PageHeader } from "@/components/common/PageHeader";

export default function RideHistoryPage() {
  return (
    <div className="py-16 max-[520px]:py-10 mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] grid gap-[18px]">
      <PageHeader title="Ride History" description="Your recent RealTimeCabs trips will appear here." />
      <EmptyState title="No rides yet" description="Book your first ride to start building your trip history." />
    </div>
  );
}
