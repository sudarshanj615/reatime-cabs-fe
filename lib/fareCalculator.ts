import { cabTypes, type CabTypeId } from "@/constants/cabTypes";

export function calculateFare(cabTypeId: CabTypeId, distanceKm: number) {
  const cabType = cabTypes.find((cab) => cab.id === cabTypeId);
  const baseFare = cabType?.baseFare ?? 50;
  return Math.round(baseFare + distanceKm * 18);
}
