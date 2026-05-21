import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";

export default function DriverDashboardPage() {
  return (
    <div className="py-16 max-[520px]:py-10 mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] grid gap-[18px]">
      <PageHeader title="Driver Dashboard" description="Accept rides, track earnings, and manage your driver profile." />
      <div className="grid gap-6 grid-cols-3 max-[900px]:grid-cols-1 max-[760px]:grid-cols-1">
        <Link className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:p-5 max-[520px]:rounded-[20px]" href="/dashboard/driver/active-rides">
          <h3>Active Rides</h3>
          <p className="text-sm text-[rgba(255,255,255,0.7)] mb-[15px]">View incoming and ongoing ride requests.</p>
        </Link>
        <Link className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:p-5 max-[520px]:rounded-[20px]" href="/dashboard/driver/earnings">
          <h3>Earnings</h3>
          <p className="text-sm text-[rgba(255,255,255,0.7)] mb-[15px]">Track today, weekly, and monthly income.</p>
        </Link>
        <Link className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:p-5 max-[520px]:rounded-[20px]" href="/dashboard/driver/profile">
          <h3>Profile</h3>
          <p className="text-sm text-[rgba(255,255,255,0.7)] mb-[15px]">Update vehicle and document details.</p>
        </Link>
      </div>
    </div>
  );
}
