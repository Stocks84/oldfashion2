import axios from 'axios';

const API_BASE_URL = 'https://backend-url.com/api'; // Replace with actual backend URL

export const login = async (username, password) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, { username, password });
  return response.data; // Returns user data (e.g., token)
};

export const signUp = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, data);
  return response.data; // Returns user data or success message
};
