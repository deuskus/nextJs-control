"use client";

import {IGenre} from "@/models/IGenre";
import {useAppSelector} from "@/redux/hooks/useAppSelector";
import {useAppDispatch} from "@/redux/hooks/useAppDispatch";
import {useEffect} from "react";
import {genreActions} from "@/redux/slices/genre-slice/genreSlice";

export const useGenre = (genreId: number): IGenre => {
    const name = useAppSelector(state => state.genreStore.genresMap[genreId]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!name) dispatch(genreActions.loadGenres())
    }, [dispatch, genreId, name]);

    return {id: genreId, name: name} as IGenre;
}