import type { cabTypes } from "@/constants/cabTypes";

type Cab = (typeof cabTypes)[number];

export function CabCard({ cab }: { cab: Cab }) {
  return (
    <button className="card cab-card" type="button" style={{ textAlign: "left" }}>
      <h3>
        {cab.icon} {cab.name}
      </h3>
      <p className="muted">{cab.seats} seat ride</p>
      <strong>Rs. {cab.baseFare} base fare</strong>
    </button>
  );
}
