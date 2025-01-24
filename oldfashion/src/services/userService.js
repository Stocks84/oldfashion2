import API from './api'; 

export const updateUserProfile = async (userId, data) => {
  const response = await API.put(`/users/${userId}`, data); 
  return response.data;
};

export const fetchUserProfile = async () => {
  const userId = localStorage.getItem('userId'); // Make sure userId is saved in localStorage after login
  try {
    const response = await API.get(`/users/${userId}/`); // Use the correct endpoint for a specific user
    return response.data;
  } catch (err) {
    console.error('Error fetching profile:', err);
    throw err;
  }
};


