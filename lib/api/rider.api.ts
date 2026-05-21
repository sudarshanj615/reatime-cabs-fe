import api from "./client";

export const rideAPI = {
  createRide: async (data: any) => {
    const response = await api.post("/ride/create", data);
    return response.data;
  },

  getRide: async (id: string) => {
    const response = await api.get(`/ride/${id}`);
    return response.data;
  },

  getUserRides: async (userId: string) => {
    const response = await api.get(`/ride/user/${userId}`);
    return response.data;
  },

  getDriverRides: async (driverId: string) => {
    const response = await api.get(`/ride/driver/${driverId}`);
    return response.data;
  },

  updateRideStatus: async (id: string, status: string) => {
    const response = await api.patch(`/ride/${id}/status`, {
      status,
    });

    return response.data;
  },

  cancelRide: async (id: string) => {
    const response = await api.post(`/ride/${id}/cancel`);
    return response.data;
  },
};