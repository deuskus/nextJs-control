import {FC} from "react";
import {GenreBadge} from "../genre-badge/GenreBadge.tsx";

type GenresProps = {
    genres: number[];
}

export const GenreBadges: FC<GenresProps> = ({genres}) => {
    return (
        <div className='flex flex-wrap gap-2 p-2'>
            {genres?.map((genre, index) => <GenreBadge key={index} genreId={genre}/>)}
        </div>
    );
};