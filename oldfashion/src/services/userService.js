import API from './api'; 

export const updateUserProfile = async (userId, data) => {
  const response = await API.put(`/users/${userId}`, data); 
  return response.data;
};

export const fetchUserProfile = async (userId) => {
  const response = await API.get(`/users/${userId}/`); 
  return response.data;
};

