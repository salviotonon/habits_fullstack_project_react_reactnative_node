import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.213.27.14:3333",
});
