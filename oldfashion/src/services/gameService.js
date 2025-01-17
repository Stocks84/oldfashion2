import API from "./api";

export const fetchGames = async () => {
    const response = await API.get("/games/");
    return response.data;
};

export const fetchGameDetails = async (gameId) => {
    const response = await API.get(`/games/${gameId}`);
    return response.data;
};

  
