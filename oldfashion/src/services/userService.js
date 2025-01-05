import axios from 'axios';

const API_BASE_URL = 'https://backend-url.com/api'; // Replace with actual backend URL

// export const fetchUserProfile = async (userId) => {
//   const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
//   return response.data; // Returns user profile data
// };

export const updateUserProfile = async (userId, data) => {
  const response = await axios.put(`${API_BASE_URL}/users/${userId}`, data);
  return response.data; // Returns updated user data
};

export const fetchUserProfile = async (userId) => {
    // Mock Data for Testing
    return Promise.resolve({
      id: userId,
      username: 'test_user',
      email: 'test@example.com',
      bio: 'This is a sample bio.',
      favoriteDrink: 'Mojito',
    });
  };
  
