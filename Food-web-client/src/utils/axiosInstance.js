import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://foodhut-d4sp.onrender.com",
  // baseURL: "http://localhost:8001",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
