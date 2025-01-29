import API from './api'; 

export const fetchUserProfile = async () => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    throw new Error('User is not authenticated.');
  }

  const userId = localStorage.getItem('userId'); // Ensure this is set when the user logs in
  
  try {
    const response = await API.get(`/users/${userId}/`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add token in request header
      }
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching profile:', err);
    throw err;
  }
};

export const updateUserProfile = async (userId, data) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    throw new Error('User is not authenticated.');
  }

  try {
    const response = await API.put(`/users/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`, // Include token in header
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error updating profile:', err);
    throw err;
  }
};


