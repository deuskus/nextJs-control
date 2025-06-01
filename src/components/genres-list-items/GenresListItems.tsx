import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices/genre-slice/genreSlice.ts";
import {GenreLink} from "../genre-link/GenreLink.tsx";

export const GenresListItems = ({search = ""}: {search?: string}) => {
    const {genresList} = useAppSelector(state => state.genreStore);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (genresList.length === 0) {
            dispatch(genreActions.loadGenres());
        }
    }, [genresList.length, dispatch]);

    const filtered = search
        ? genresList.filter(g => g.name.toLowerCase().includes(search.toLowerCase()))
        : genresList;

    if (filtered.length === 0) {
        return <li className="text-gray-500">No genres found</li>;
    }

    return (
        <>
            {filtered.map((genre) => (
                <li key={genre.id} className='rounded-2xl hover:text-black hover:bg-slate-50 py-1 pl-4 active:border active:border-white'>
                    <GenreLink genre={genre}/>
                </li>
            ))}
        </>
    );
};