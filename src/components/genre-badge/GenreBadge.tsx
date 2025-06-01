import {FC} from "react";
import {GenreLink} from "../genre-link/GenreLink.tsx";
import {useGenre} from "../../hooks/useGenre.ts";

type GenreProps = {
    genreId: number;
}

export const GenreBadge: FC<GenreProps> = ({genreId}) => {
    const genre = useGenre(genreId)

    return (
        <div className='p-1 bg-white text-black rounded-lg text-[0.7rem] hover:bg-neutral-200'>
            <GenreLink genre={genre}/>
        </div>
    );
};