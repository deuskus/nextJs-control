"use client";
import {InitUserSessionWrapper} from "@/components/InitUserSessionWrapper";
import {Preloader} from "@/components/preloader/Preloader";
import {MoviesList} from "@/components/movies-list/MoviesList";
import {movieActions} from "@/redux/slices/movie-slice/movieSlice";
import {useAppSelector} from "@/redux/hooks/useAppSelector";
import {useLoadingClearParams} from "@/hooks/useLoadingClearParams";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import React from "react";

function GenreContent({ genreId }: { genreId: string }) {
    const router = useRouter();
    const genreName = useAppSelector(state => state.genreStore.genresMap[+genreId]);
    const {isLoading, params: movieParams} = useLoadingClearParams({clearParams: ['query', 'sort_by'], extraParams: {with_genres: genreId}});
    const safeParams = { page: '1', ...movieParams };

    useEffect(() => {
        if (!genreName && !isLoading) {
            router.push('/movies');
        }
    }, [genreName, isLoading, router]);

    if (!genreName && !isLoading) {
        return null;
    }

    return isLoading ? <Preloader/> : <MoviesList params={safeParams} action={movieActions.loadMovies} title={genreName + ' movies'}/>;
}

export default function GenrePage({ params }: { params: Promise<{ genreId: string }> }) {
    const { genreId } = React.use(params);
    return (
        <InitUserSessionWrapper>
            <GenreContent genreId={genreId || '0'} />
        </InitUserSessionWrapper>
    );
} 