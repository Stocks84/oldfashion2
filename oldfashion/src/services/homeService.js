import API from "./api";
import axios from 'axios';

const BASE_URL = 'https://drf-old-fashion2-89d0730feda0.herokuapp.com';

// Fetch recent games
// export const fetchRecentGames = async () => {
//     const response = await API.get("/games/recent");
//     return response.data;
// };
export const fetchRecentGames = async () => {
    const response = await axios.get(`${BASE_URL}/api/games/recent`);
    return response.data;
};

// Fetch user info by userId
export const fetchUserInfo = async (userId) => {
    const response = await API.get(`/users/${userId}`);
    return response.data;
};

// Fetch all user profiles
export const getUserProfiles = async () => {
    const response = await API.get("/users/");
    return response.data;
};

// Fetch all games
export const getGames = async () => {
    const response = await API.get("/games/");
    return response.data;
};
