import api from "./client";

export const driverAPI = {
  getProfile: async (id: string) => {
    const response = await api.get(`/Drivers/${id}`);
    return response.data;
  },

  updateProfile: async (id: string, data: any) => {
    const response = await api.put(`/Drivers/${id}`, data);
    return response.data;
  },

  updateLocation: async (id: string, data: any) => {
    const response = await api.patch(`/Drivers/${id}/location`, data);
    return response.data;
  },

  getActiveRides: async (id: string) => {
    const response = await api.get(`/Drivers/${id}/active-rides`);
    return response.data;
  },

  acceptRide: async (rideId: string) => {
    const response = await api.post(
      `/Drivers/ride/${rideId}/accept`
    );

    return response.data;
  },
};