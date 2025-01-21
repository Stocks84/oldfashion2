import API from "./api";
import axios from 'axios';

const BASE_URL = 'https://drf-old-fashion2-89d0730feda0.herokuapp.com/api/games';

const token = localStorage.getItem('token');

const API_URL = 'https://drf-old-fashion2-89d0730feda0.herokuapp.com/api/games';

export const fetchRecentGames = async () => {
    const token = localStorage.getItem('token');
    return await axios.get(`${API_URL}/recent/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
// Fetch recent games
// export const fetchRecentGames = async () => {
//     const response = await API.get("/recent");
//     return response.data;
// };
// export const fetchRecentGames = async () => {
//     const response = await axios.get(`${BASE_URL}/recent/`, {
//         headers: {
//             'Authorization': `Token ${token}`
//         }
//     });
//     return response.data;
// };

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
