import {axiosMovieInstance} from "./api.service.ts";
import {IGenreResponse} from "../models/IGenre.ts";

export const genreService = {
    getGenres: async () => {
        const response = await axiosMovieInstance.get<IGenreResponse>('/genre/movie/list');
        return response.data.genres;
    }
}