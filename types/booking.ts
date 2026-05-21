import type { CabTypeId } from "@/constants/cabTypes";

export type BookingRequest = {
  pickup: string;
  drop: string;
  cabType: CabTypeId;
};
