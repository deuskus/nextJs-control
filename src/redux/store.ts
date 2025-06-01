import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "@/redux/slices/movie-slice/movieSlice";
import {genreSlice} from "@/redux/slices/genre-slice/genreSlice";
import {userSlice} from "@/redux/slices/user-slice/userSlice";
import {favoritesReducer} from "@/redux/slices/favorites-slice/favoritesSlice";

export const store = configureStore({
    reducer: {
        movieStore: movieSlice.reducer,
        genreStore: genreSlice.reducer,
        userStore: userSlice.reducer,
        favoritesStore: favoritesReducer
    }
})