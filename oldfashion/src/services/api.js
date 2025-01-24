import axios from "axios";

const API = axios.create({
    baseURL: 'https://drf-old-fashion2-89d0730feda0.herokuapp.com/api',
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
}, (error) => {
    return Promise.reject(error);
});

export default API;