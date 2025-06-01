import {createSlice} from "@reduxjs/toolkit";
import {IMovieResponse} from "../../../models/IMovieResponse.ts";
import {IMovieParams} from "../../../models/IMovieParams.ts";
import {handleFulfilledMovies, removePending, setPending} from "../helpers/helpers.ts";
import {loadMovies, loadSearchMovies} from "./thunks/loadMovieThunks.ts";

export type InitialMovieType = {
    moviesData: Record<string, IMovieResponse>;
    params: IMovieParams;
    isLoading: boolean;
    keyHistory: string[];
}

const initialMovieState: InitialMovieType = {moviesData: {},params: {page: '1'}, isLoading: false, keyHistory: []};

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initialMovieState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadMovies.pending, setPending)
            .addCase(loadMovies.fulfilled, handleFulfilledMovies)
            .addCase(loadMovies.rejected, removePending)
            .addCase(loadSearchMovies.pending, setPending)
            .addCase(loadSearchMovies.fulfilled, handleFulfilledMovies)
            .addCase(loadSearchMovies.rejected, removePending)
    }
});

export const movieActions = {
    ...movieSlice.actions,
    loadMovies,
    loadSearchMovies,
}