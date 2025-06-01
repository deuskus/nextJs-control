"use client";

import {IMovieParams} from "@/models/IMovieParams";
import {movieActions} from "@/redux/slices/movie-slice/movieSlice";
import {useAppStateKey} from "@/hooks/useAppStateKey";
import {useAppSelector} from "@/redux/hooks/useAppSelector";
import {useAppDispatch} from "@/redux/hooks/useAppDispatch";
import {useEffect} from "react";

export const useLoadMovies = (params: IMovieParams, action: typeof movieActions.loadMovies | typeof movieActions.loadSearchMovies) => {
    const key = useAppStateKey(params);
    const moviesData = useAppSelector(state => state.movieStore.moviesData[key]);
    const dispatch = useAppDispatch();

    console.log('useLoadMovies', { key, params, moviesData });

    useEffect(() => {
        if (!moviesData) {
            dispatch(action(params));
        }
    }, [dispatch, key, moviesData, action, params]);

    return moviesData;
};