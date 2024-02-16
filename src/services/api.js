import axios from "axios";

export const signContactApi = axios.create({
  baseURL: "https://desafio-fullstack-api.onrender.com/",
  timeout: 8 * 1000,
});
