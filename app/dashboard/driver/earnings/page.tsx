import { PageHeader } from "@/components/common/PageHeader";

const earningCards = [
  { label: "Today", amount: "Rs. 0" },
  { label: "This Week", amount: "Rs. 0" },
  { label: "This Month", amount: "Rs. 0" },
];

export default function EarningsPage() {
  return (
    <div className="py-16 max-[520px]:py-10 mx-auto w-[min(1200px,calc(100%-40px))] max-[1100px]:w-[min(calc(100%-36px),940px)] max-[520px]:w-[min(calc(100%-24px),100%)] grid gap-[18px]">
      <PageHeader title="Earnings" description="Track your RealTimeCabs payouts." />
      <div className="grid gap-6 grid-cols-3 max-[900px]:grid-cols-1 max-[760px]:grid-cols-1">
        {earningCards.map((item) => (
          <div className="bg-white border border-[#f0df9e] rounded-3xl p-6 shadow-[0_12px_32px_rgba(12,12,12,0.1)] max-[520px]:p-5 max-[520px]:rounded-[20px]" key={item.label}>
            <p className="text-sm text-[rgba(255,255,255,0.7)] mb-[15px]">{item.label}</p>
            <h2>{item.amount}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
