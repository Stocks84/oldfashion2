import API from './api'; 

export const fetchUserProfile = async () => {
  const token = localStorage.getItem('authToken');  // Check for valid token
  const userId = localStorage.getItem('userId');    // Ensure the userId is stored

  if (!token || !userId) {
    throw new Error('User is not authenticated or user ID is missing.');
  }

  try {
    const response = await API.get(`/users/${userId}/`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Add the token to the request header
      }
    });
    return response.data;
  } catch (err) {
    console.error('Error fetching profile:', err);
    throw err;  // Re-throw the error for handling in the component
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


