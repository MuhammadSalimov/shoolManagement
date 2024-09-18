import axios from "axios";
import $axios, { api_url } from "./index";

const $api = axios.create({
  withCredentials: true,
  baseURL: `${api_url}`,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const { data } = await $axios.get("/auth/refresh");
        localStorage.setItem("accessToken", data.accessToken);
        return $api.request(originalRequest);
      } catch (error) {
        console.log("Not authorized", error);
      }
    }

    throw error;
  }
);

export default $api;
