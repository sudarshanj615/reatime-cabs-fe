import api from "./client";

export const userAPI = {
  getProfile: async (id: string) => {
    const res = await api.get(`/users/${id}`);
    return res.data;
  },

  updateProfile: async (id: string, data: any) => {
    const res = await api.put(`/users/${id}`, data);
    return res.data;
  },

  deleteAccount: async (id: string) => {
    const res = await api.delete(`/users/${id}`);
    return res.data;
  },
};