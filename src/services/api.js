import axios from "axios"; 

export const signContactApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 11 * 1000,
});
