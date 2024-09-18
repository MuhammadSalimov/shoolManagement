import axios from "axios";

export const api_url = "https://medieval.uz/api";

const $axios = axios.create({
  withCredentials: true,
  baseURL: api_url,
});

export default $axios;
