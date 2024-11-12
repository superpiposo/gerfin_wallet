import axios from "axios";

const baseURL = "http://localhost:3000/api";

export const gerfin_api = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});

gerfin_api.interceptors.request.use(
  function (config) {
    return config;
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
