import {IMovieParams} from "../../../../models/IMovieParams.ts";
import {IMovieResponse} from "../../../../models/IMovieResponse.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {useAppStateKey} from "../../../../hooks/useAppStateKey.ts";

export const createMovieThunk = (
    typePrefix: string,
    fetcher: (params: IMovieParams) => Promise<IMovieResponse>
) => {
  return createAsyncThunk(
      typePrefix,
      async (params: IMovieParams, thunkAPI) => {
          const key = useAppStateKey(params);
          const data = await fetcher(params);
          return thunkAPI.fulfillWithValue({key, data});
      }
  );
};