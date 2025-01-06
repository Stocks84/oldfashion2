import axios from "axios";

const API = axios.create({
    baseURL: "https://drf-old-fashion2-89d0730feda0.herokuapp.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;