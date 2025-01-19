import API from './api';
import axios from 'axios';


export const login = async (username, password) => {
  const response = await API.post('/auth/login/', { username, password });
  const { token, user } = response.data;

  // Save token to localStorage
  localStorage.setItem('authToken', token);

  return user; // Return user data for onLoginSuccess
};

export const logout = () => {
  localStorage.removeItem("authToken");
};

export const signUp = async (userData) => {
  const response = await axios.post('/api/auth/signup/', userData);
  return response.data;
};