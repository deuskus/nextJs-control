"use client";
import {InitUserSessionWrapper} from "@/components/InitUserSessionWrapper";
import {MoviesList} from "@/components/movies-list/MoviesList";
import {Preloader} from "@/components/preloader/Preloader";
import {movieActions} from "@/redux/slices/movie-slice/movieSlice";
import {useLoadingClearParams} from "@/hooks/useLoadingClearParams";

function MoviesContent() {
    const {isLoading, params} = useLoadingClearParams({clearParams: ['query']});
    const safeParams = { page: '1', ...params };
    console.log('MoviesContent safeParams:', safeParams);
    return isLoading ? <Preloader/> : <MoviesList params={safeParams} action={movieActions.loadMovies} title={'Movies'}/>;
}

export default function MoviesPage() {
    return (
        <InitUserSessionWrapper>
            <MoviesContent />
        </InitUserSessionWrapper>
    );
} 