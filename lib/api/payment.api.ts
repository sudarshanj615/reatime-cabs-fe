import api from "./client";

export const paymentAPI = {
  createPayment: async (data: any) => {
    const response = await api.post(
      "/payment/create",
      data
    );

    return response.data;
  },

  verifyPayment: async (id: string) => {
    const response = await api.get(
      `/payment/verify/${id}`
    );

    return response.data;
  },

  getPaymentHistory: async (userId: string) => {
    const response = await api.get(
      `/payment/history/${userId}`
    );

    return response.data;
  },
};