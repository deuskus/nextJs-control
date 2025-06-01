"use client";
import {FC} from "react";
import {IoHeart, IoHeartOutline} from "react-icons/io5";
import {useAppSelector} from "@/redux/hooks/useAppSelector";
import {useAppDispatch} from "@/redux/hooks/useAppDispatch";
import {favoritesActions} from "@/redux/slices/favorites-slice/favoritesSlice";
import {IMovie} from "@/models/IMovie";

type FavoriteButtonProps = {
    movie: IMovie;
    className?: string;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({movie, className = ''}) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.favoritesStore.movies);
    const isFavorite = favorites.some(fav => fav.id === movie.id);

    const handleClick = () => {
        if (isFavorite) {
            dispatch(favoritesActions.removeFromFavorites(movie.id));
        } else {
            dispatch(favoritesActions.addToFavorites(movie));
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition ${className}`}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
            {isFavorite ? (
                <IoHeart className="text-xl text-red-500" />
            ) : (
                <IoHeartOutline className="text-xl" />
            )}
            {isFavorite ? "Remove" : "Add to Favorites"}
        </button>
    );
}; 