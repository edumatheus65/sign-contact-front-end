import axios from "axios";

export const signContactApi = axios.create({
  baseURL: "https://desafio-fullstack-api.onrender.com",
  timeout: 11 * 1000,
});
