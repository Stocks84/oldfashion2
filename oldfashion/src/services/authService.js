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
  try {
    const response = await API.post(`${BASE_URL}/token/`, credentials); // Using the API instance with interceptor
    localStorage.setItem("authToken", response.data.access);
    return response.data;
  } catch (err) {
    console.error('login failed:', err.response?.data || err.message);
  }
};

export const refreshToken = async (refreshToken) => {
  const response = await API.post(`${BASE_URL}/token/refresh/`, { refresh: refreshToken });  // Using the API instance
  localStorage.setItem("authToken", response.data.access);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('authToken');  // Clear the stored token on logout
};

export const signUp = async (userData) => {
  try {
    localStorage.removeItem('authToken'); //Clear token
    const response = await API.post(`${BASE_URL}/signup/`, userData);
    return response.data;
  } catch (err) {
    console.error('Sign-up error:', err);  // Log the error for debugging
    throw err;  // Re-throw the error so it can be handled in the component
  }
};

