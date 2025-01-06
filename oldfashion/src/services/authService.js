import API from "./api";

export const login = async (credentials) => {
    const response = await API.post("/auth/login/", credentials);
    return response.data;
};

export const signUp = async (userData) => {
    const response = await API.post("/auth/signup/", userData);
    return response.data;
};
