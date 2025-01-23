import API from "./api";


const BASE_URL = 'https://drf-old-fashion2-89d0730feda0.herokuapp.com/api';
const API_URL = `${BASE_URL}/games`;


// Fetch recent games
export const fetchRecentGames = async () => {
    const response = await API.get('/games/recent/');
    return response.data;
};


// Fetch user Profile by userId
export const fetchUserProfile = async (userId) => {
    try {
      const response = await API.get(`/users/${userId}`);  // Fetch user data using the authenticated API instance
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  };

// Fetch all user profiles
export const getUserProfiles = async () => {
    const response = await API.get("/users/");
    return response.data;
};

// Fetch all games
export const getGames = async () => {
    const response = await API.get(API_URL);
    return response.data;
};
