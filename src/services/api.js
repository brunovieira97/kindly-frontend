import axios from 'axios';
import { getToken } from "./auth";

const api = axios.create({
  //baseURL: "https://kindly-backend.herokuapp.com"
  baseURL: 'https://kindly-backend-pr-60.herokuapp.com'
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
