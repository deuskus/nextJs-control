import {FC} from "react";
import {IMovie} from "../../models/IMovie";
import {StarsRating} from "../stars-rating/StarsRating";
import {GenreBadges} from "../genre-badges/GenreBadges";
import Link from "next/link";

type MovieCardProp = {
    movie: IMovie;
}

export const MoviesListCard: FC<MovieCardProp> = ({movie}) => {
    const {title, release_date, vote_average, backdrop_path, genre_ids, overview, id} = movie;

    const img_path: string = backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : '/movie_placeholder_sm.jpg';

    // Для примера: если рейтинг > 7 — зелёная рамка, иначе жёлтая
    const borderColor = vote_average > 7 ? 'border-green-500' : 'border-yellow-500';

    return (
        <div className={`bg-black ${borderColor} border-4 rounded-lg p-2 flex flex-col items-center transition-transform duration-300 hover:scale-105`}>
            <Link href={`/movie/${id}`} className="w-full">
                <img
                    className='w-full h-[340px] object-cover rounded-md mb-3 border-b-2 border-neutral-700'
                    src={img_path}
                    alt={title}
                    loading='lazy'
                />
                <h3 className='text-white text-lg font-bold text-center mt-2'>{title}</h3>
            </Link>
            <div className='w-full flex flex-col items-center gap-2'>
                <span className='text-gray-300 text-sm flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {release_date ? new Date(release_date).toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric'}) : 'Unknown'}
                </span>
                <div className='flex justify-center'><StarsRating rating={vote_average}/></div>
                <p className='text-gray-200 text-sm text-center line-clamp-4'>{overview}</p>
                <div className='w-full flex justify-center mt-2'><GenreBadges genres={genre_ids}/></div>
            </div>
        </div>
    );
};