import {IMovieParams} from "../models/IMovieParams.ts";

export const useAppStateKey = (params: IMovieParams) => {
    return Object.values(params).join('');
}