import axios from 'axios';

const BASE_URL = 'https://drf-old-fashion2-89d0730feda0.herokuapp.com/api/auth';

// Create axios instance
const API = axios.create({
  baseURL: 'https://drf-old-fashion2-89d0730feda0.herokuapp.com/api', // Your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Automatically include auth token if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');  // Get token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;  // Add token to the header
  }
  return config;
});

export const login = async (credentials) => {
  const response = await API.post(`${BASE_URL}/token/`, credentials);  // Using the API instance with interceptor
  return response.data;
};

export const refreshToken = async (refreshToken) => {
  const response = await API.post(`${BASE_URL}/token/refresh/`, { refresh: refreshToken });  // Using the API instance
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('authToken');  // Clear the stored token on logout
};

export const signUp = async (userData) => {
  const response = await API.post(`${BASE_URL}/signup/`, userData);  // Using the API instance
  return response.data;
};
