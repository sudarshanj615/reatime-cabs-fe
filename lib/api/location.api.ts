import request from "./client";

export const locationAPI = {
  getNearbyDrivers: (lat: number, lng: number) =>
    request(`/location/drivers?lat=${lat}&lng=${lng}`),

  geocode: (address: string) =>
    request(`/location/geocode?address=${address}`),
};