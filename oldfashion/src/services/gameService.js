import API from "./api";
import axios from 'axios';


export const fetchGames = async () => {
    try {
        const response = await API.get("/games/");
        return response.data;
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error; // Re-throw the error to handle it in the UI
    }
};

export const fetchGameDetails = async (gameId) => {
    const response = await API.get(`/games/${gameId}`);
    return response.data;
};

export const fetchRecentGames = async () => {
    const response = await API.get("/games/recent/");
    return response.data;
};

export const fetchComments = async (gameId) => {
    const response = await API.get(`/games/${gameId}/comments/`); // Ensure gameId is passed here
    return response.data;
};

export const postComment = async (gameId, commentData) => {
    const response = await axios.post(`/api/games/${gameId}/comments/`, commentData);
    return response.data;
};
