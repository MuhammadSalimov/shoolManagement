import axios from "axios";

export const api_url = "http://192.168.0.107:4100/api";

const $axios = axios.create({
  withCredentials: true,
  baseURL: api_url,
});

export default $axios;
