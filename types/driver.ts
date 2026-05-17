import type { CabTypeId } from "@/constants/cabTypes";

export type Driver = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  vehicleNumber: string;
  cabType: CabTypeId;
  online: boolean;
};
