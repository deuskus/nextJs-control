import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovie} from "../../../models/IMovie.ts";

interface FavoritesState {
    movies: IMovie[];
}

const initialState: FavoritesState = {
    movies: []
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<IMovie>) => {
            if (!state.movies.some(movie => movie.id === action.payload.id)) {
                state.movies.push(action.payload);
            }
        },
        removeFromFavorites: (state, action: PayloadAction<number>) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload);
        },
        clearFavorites: (state) => {
            state.movies = [];
        }
    }
});

export const favoritesActions = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer; 