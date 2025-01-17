import axios from "axios";

const API = axios.create({
    baseURL: "https://drf-old-fashion2-89d0730feda0.herokuapp.com",
    headers: {
        "Content-Type": "application/json",
    },
});

// Automatically include auth token if available
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;