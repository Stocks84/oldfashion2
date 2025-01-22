import API from './api';
import axios from 'axios';


const BASE_URL = 'https://drf-old-fashion2-89d0730feda0.herokuapp.com/api/auth';

export const login = async (credentials) => {
    const response = await axios.post(`${BASE_URL}/token/`, credentials);
    return response.data;
};

export const refreshToken = async (refreshToken) => {
  const response = await axios.post(`${BASE_URL}/token/refresh/`, { refresh: refreshToken });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("authToken");
};

export const signUp = async (userData) => {
  const response = await axios.post(`${BASE_URL}/signup/`, userData);
  return response.data;
};