import {axiosMovieInstance} from "./api.service";
import {IMovieResponse} from "../models/IMovieResponse";
import {IMovieParams} from "../models/IMovieParams";
import {IMovie} from "../models/IMovie";

const fetchMovies = async (endpoint: string, params: IMovieParams): Promise<IMovieResponse> => {
    const response = await axiosMovieInstance.get<IMovieResponse>(endpoint, {params});
    return response.data;
}

const fetchMovieById = async (id: string): Promise<IMovie> => {
    const response = await axiosMovieInstance.get<IMovie>(`/movie/${id}`);
    return response.data;
}

export const movieService = {
    getMovies: (params: IMovieParams) => {
        return fetchMovies('/discover/movie', params);
    },
    getSearchResults: (params: IMovieParams) => {
        return fetchMovies('/search/movie', params);
    },
    getMovieById: fetchMovieById,
}