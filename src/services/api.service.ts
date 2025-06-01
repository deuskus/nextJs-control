import axios from "axios";

export const axiosMovieInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.NEXT_PUBLIC_KEY_API,
    },
    headers: {'accept': 'application/json'}
});

export const axiosLoginInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type': 'application/json'}
});