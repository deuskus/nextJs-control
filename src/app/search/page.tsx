"use client";
import {InitUserSessionWrapper} from "@/components/InitUserSessionWrapper";
import {Preloader} from "@/components/preloader/Preloader";
import {MoviesList} from "@/components/movies-list/MoviesList";
import {movieActions} from "@/redux/slices/movie-slice/movieSlice";
import {useLoadingClearParams} from "@/hooks/useLoadingClearParams";

function SearchContent() {
    const {isLoading, params} = useLoadingClearParams({clearParams: ['sort_by', 'with_genres']});
    return isLoading ? <Preloader/> : <MoviesList params={params} action={movieActions.loadSearchMovies} title={'Movies'}/>;
}

export default function SearchPage() {
    return (
        <InitUserSessionWrapper>
            <SearchContent />
        </InitUserSessionWrapper>
    );
} 