import axios from "axios";

export const api_url = process.env.API_URL;

const $axios = axios.create({
  withCredentials: true,
  baseURL: api_url,
});

export default $axios;
