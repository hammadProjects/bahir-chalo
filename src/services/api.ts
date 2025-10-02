import axios from "axios";

// what does with credentials do? - Accept credentials like cookies from backend & send token as inceptors
const api = axios.create({
  baseURL: "http://localhost:5001",
  withCredentials: true,
});

export default api;
