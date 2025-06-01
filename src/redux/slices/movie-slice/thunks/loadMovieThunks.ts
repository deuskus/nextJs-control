import {createMovieThunk} from "./createMovieThunk.ts";
import {movieService} from "../../../../services/movie.service.ts";

const loadMovies = createMovieThunk(
    'movieSlice/loadMovies',
    movieService.getMovies,
);

const loadSearchMovies = createMovieThunk(
    'movieSlice/loadSearchMovies',
    movieService.getSearchResults,
);

export {
    loadMovies,
    loadSearchMovies,
}