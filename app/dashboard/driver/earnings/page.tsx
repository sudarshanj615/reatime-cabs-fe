import { PageHeader } from "@/components/common/PageHeader";

const earningCards = [
  { label: "Today", amount: "Rs. 0" },
  { label: "This Week", amount: "Rs. 0" },
  { label: "This Month", amount: "Rs. 0" },
];

export default function EarningsPage() {
  return (
    <div className="page-shell container stack">
      <PageHeader title="Earnings" description="Track your RealTimeCabs payouts." />
      <div className="grid grid-3">
        {earningCards.map((item) => (
          <div className="card" key={item.label}>
            <p className="muted">{item.label}</p>
            <h2>{item.amount}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
