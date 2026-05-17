import type { CabTypeId } from "@/constants/cabTypes";

export type RideStatus = "searching_driver" | "accepted" | "in_progress" | "completed" | "cancelled";

export type Ride = {
  id: string;
  userId: string;
  driverId?: string;
  pickup: string;
  drop: string;
  cabType: CabTypeId;
  fare: number;
  status: RideStatus;
};
