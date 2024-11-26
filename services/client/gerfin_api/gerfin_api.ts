import axios from "axios";
import { toast } from "sonner";

const baseURL = "https://gerfin-wallet.vercel.app/api";

export const gerfin_api = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

gerfin_api.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("accessToken");
    if (!token) {
      toast.warning("Sem sessão iniciada!");
      window.location.replace("/signin");
      throw new Error("Sem sessão iniciada!");
    } else {
      config.headers.Authorization = `bearer ${token}`;
      return config;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

gerfin_api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const public_gerfin_api = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});
