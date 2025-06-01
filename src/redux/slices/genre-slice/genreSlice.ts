import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGenre} from "../../../models/IGenre.ts";

import {loadGenres} from "./thunks/loadGenresThunks.ts";

type InitialGenreType = {
    genresMap: Record<number, string>;
    genresList: IGenre[];
}

const initialGenreState: InitialGenreType = {genresMap: {}, genresList: []};

export const genreSlice= createSlice({
    name: 'genreSlice',
    initialState: initialGenreState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadGenres.fulfilled, (state, action: PayloadAction<IGenre[]>) => {
                state.genresList = action.payload;
                state.genresMap = action.payload.reduce((acc, genre) => {
                    acc[genre.id] = genre.name;
                    return acc;
                }, {} as Record<number, string>);
            })
    }
})

export const genreActions = {
    ...genreSlice.actions,
    loadGenres,
}