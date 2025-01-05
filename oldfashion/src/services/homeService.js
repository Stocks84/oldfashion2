import axios from 'axios';

const API_BASE_URL = 'https://backend-url.com/api'; // Replace with backend URL

export const fetchRecentGames = async () => {
  const response = await axios.get(`${API_BASE_URL}/games/recent`);
  return response.data;
};

export const fetchUserInfo = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

export const login = async (username, password) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, { username, password });
  return response.data; // Returns user data (e.g., token)
};
