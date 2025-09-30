import axios from "axios";

// what does with credentials do? - Accept credentials like cookies from backend & send token as inceptors
const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      throw Error("Please Login to Continue");
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
