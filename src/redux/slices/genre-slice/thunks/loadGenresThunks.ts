import {createAsyncThunk} from "@reduxjs/toolkit";
import {genreService} from "../../../../services/genre.service.ts";

export const loadGenres = createAsyncThunk(
    'genreSlice/loadMapGenres',
    async (_,thunkAPI ) => {
        const response = await genreService.getGenres();
        return thunkAPI.fulfillWithValue(response);
    }
);