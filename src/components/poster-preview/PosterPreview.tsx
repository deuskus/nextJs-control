import {FC} from "react";
import {IMovie} from "@/models/IMovie";
import {FaRegWindowClose} from "react-icons/fa";

type PosterProp = {
    movie: IMovie;
    handlerClick: () => void;
}

export const PosterPreview: FC<PosterProp> = ({ movie, handlerClick }) => {
    const { poster_path, title } = movie;
    const posterPath = poster_path
        ? `https://image.tmdb.org/t/p/w780${poster_path}`
        : '/movie_placeholder_sm.jpg';

    return (
        <div className='fixed inset-0 z-50 bg-slate-900/80 flex flex-col items-center justify-center px-4'>
            <button
                onClick={handlerClick}
                className='absolute top-4 right-4 sm:top-8 sm:right-8 text-slate-300 hover:text-white text-3xl sm:text-4xl transition-colors cursor-pointer'
            >
                <FaRegWindowClose />
            </button>
            <img
                className='max-h-[80dvh] max-w-full object-contain rounded-xl shadow-lg'
                src={posterPath}
                alt={title}
            />
        </div>
    );
};