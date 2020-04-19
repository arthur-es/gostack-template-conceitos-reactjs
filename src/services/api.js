import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3031",
});

export default api;
