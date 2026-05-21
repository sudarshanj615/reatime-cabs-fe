export const cabTypes = [
  { id: "mini", name: "Mini", seats: 4, baseFare: 79, icon: "🚕" },
  { id: "auto", name: "Auto", seats: 3, baseFare: 49, icon: "🛺" },
  { id: "bike", name: "Bike", seats: 1, baseFare: 35, icon: "🏍" },
  { id: "scooty", name: "Scooty", seats: 1, baseFare: 32, icon: "🛵" },
  { id: "suv", name: "SUV", seats: 6, baseFare: 149, icon: "🚙" },
  { id: "Parcel", name: "Parcel", seats: 6, baseFare: 149, icon: "🚚" },
] as const;

export type CabTypeId = (typeof cabTypes)[number]["id"];
