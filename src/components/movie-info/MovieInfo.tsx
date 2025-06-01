"use client";
import {FC, useState} from "react";
import {IMovie} from "@/models/IMovie";
import {StarsRating} from "@/components/stars-rating/StarsRating";
import {FaDisplay} from "react-icons/fa6";
import {GenreBadges} from "@/components/genre-badges/GenreBadges";
import {PosterPreview} from "@/components/poster-preview/PosterPreview";
import {FavoriteButton} from "@/components/favorite-button/FavoriteButton";


type MovieInfoProps = {
    movie: IMovie;
};

export const MovieInfo: FC<MovieInfoProps> = ({ movie }) => {
    const [isPosterOpen, setIsPosterOpen] = useState(false);
    const {
        backdrop_path,
        title,
        original_title,
        vote_average,
        vote_count,
        release_date,
        overview,
        genre_ids,
    } = movie;

    const backdropUrl = backdrop_path
        ? `https://image.tmdb.org/t/p/original${backdrop_path}`
        : '/movie_placeholder_lg.jpg';

    const handleClickPoster = () => {
        setIsPosterOpen(!isPosterOpen);
    };

    return (
        <div className="w-full min-h-[60dvh] flex items-center justify-center py-10 px-2 bg-gradient-to-br from-white/80 via-white/60 to-black/80">
            <div className="flex flex-col md:flex-row bg-white/90 rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden">
                <div className="md:w-1/3 flex items-center justify-center bg-black/80 p-4">
                    <img
                        src={backdropUrl}
                        alt={title}
                        className="h-full w-full object-cover rounded-none md:rounded-l-3xl md:rounded-r-none shadow-lg"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-4 p-6 md:p-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-2">{title}</h2>
                    <p className="italic text-base text-gray-500 mb-1">Original title: <span className="font-semibold">{original_title}</span></p>
                    <div className="mb-2"><GenreBadges genres={genre_ids} /></div>
                    <div className="flex flex-wrap gap-6 items-center text-base mb-2">
                        <span className="text-gray-700">Released: <b>{release_date || 'Unknown'}</b></span>
                        <span className="flex items-center gap-2 text-lg">
                            <StarsRating rating={vote_average} />
                            <span className="font-bold text-black">{(vote_average / 2).toFixed(1)}</span>
                            <span className="text-gray-400">({vote_count})</span>
                        </span>
                    </div>
                    <p className="text-gray-800 text-base leading-relaxed mb-4">{overview}</p>
                    <div className="mt-auto flex gap-4">
                        <button
                            onClick={handleClickPoster}
                            className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl text-lg font-bold shadow-lg hover:bg-neutral-800 transition focus:ring-2 focus:ring-white focus:outline-none"
                        >
                            <FaDisplay className="text-2xl" />
                            Show poster
                        </button>
                        <FavoriteButton movie={movie} />
                    </div>
                </div>
            </div>
            {isPosterOpen && <PosterPreview movie={movie} handlerClick={handleClickPoster} />}
        </div>
    );
};