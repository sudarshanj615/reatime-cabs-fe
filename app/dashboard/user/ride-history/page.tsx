import { EmptyState } from "@/components/common/EmptyState";
import { PageHeader } from "@/components/common/PageHeader";

export default function RideHistoryPage() {
  return (
    <div className="page-shell container stack">
      <PageHeader title="Ride History" description="Your recent RealTimeCabs trips will appear here." />
      <EmptyState title="No rides yet" description="Book your first ride to start building your trip history." />
    </div>
  );
}
