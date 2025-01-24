import API from './api'; 

export const updateUserProfile = async (userId, data) => {
  const response = await API.put(`/users/${userId}`, data); 
  return response.data;
};

export const fetchUserProfile = async () => {
  try {
    const response = await API.get('/users/profiles/');
    return response.data;
  } catch (err) {
    console.error('Error fetching profile:', err);
    throw err;
  }
};


