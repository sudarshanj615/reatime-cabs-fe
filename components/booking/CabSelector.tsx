import { cabTypes } from "@/constants/cabTypes";
import { CabCard } from "./CabCard";

export function CabSelector() {
  return (
    <div className="stack">
      <h2>Select Cab Type</h2>
      <div className="grid grid-5">
        {cabTypes.map((cab) => (
          <CabCard cab={cab} key={cab.id} />
        ))}
      </div>
    </div>
  );
}
