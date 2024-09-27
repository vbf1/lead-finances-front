import { useAuthStore } from "@/store/auth.store";
import axios from "axios";

const axiosNew = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

axiosNew.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().state?.token;

    if (token) {
      config.headers.set({ Authorization: `Bearer ${token}` });
    }

    return config;
  },
  (error: any) => {
    console.log("Deu erro aki");
    return Promise.reject(error);
  }
);

export { axiosNew };
