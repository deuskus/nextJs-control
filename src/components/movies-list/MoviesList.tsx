"use client";
import {FC, useState} from "react";
import {movieActions} from "@/redux/slices/movie-slice/movieSlice";
import {MoviesListCard} from "@/components/movies-list-card/MoviesListCard";
import Masonry from "react-layout-masonry";
import {IMovie} from "@/models/IMovie";
import {MovieInfo} from "@/components/movie-info/MovieInfo";
import {Pagination} from "@/components/pagination/Pagination";
import {IMovieParams} from "@/models/IMovieParams";
import {MoviesListHeader} from "@/components/movies-list/MoviesListHeader";
import {useLoadMovies} from "@/hooks/useLoadMovies";

type MoviesListProps = {
    params: IMovieParams;
    action: typeof movieActions.loadMovies | typeof movieActions.loadSearchMovies;
    title: string;
}

export const MoviesList: FC<MoviesListProps> = ({params, action, title}) => {
    const [movieSelected, setMovieSelected] = useState<IMovie | null>(null);
    const moviesData = useLoadMovies(params, action);

    const {page, query} = params
    const movies = moviesData?.results || [];
    const totalPages = moviesData?.total_pages || 1;
    const totalResults = moviesData?.total_results || 0;

    const topScroll = () => {
        const top = window.innerHeight * 0.2;
        window.scrollTo({top: -top, behavior: 'smooth'});
    }

    return (
        <div>
            {movieSelected && <MovieInfo movie={movieSelected} />}
            <div className='w-3/4 mx-auto py-8 flex flex-col'>
                <MoviesListHeader title={title} totalPages={totalPages} totalResults={totalResults} page={+page} query={query}/>
                <Masonry columns={{640: 1, 768: 2, 1024: 3, 1280: 4}} gap={24}>
                    {movies.map(movie => <MoviesListCard key={movie.id} movie={movie} onSelect={() => {
                        setMovieSelected(movie);
                        topScroll();
                    }} />)}
                </Masonry>
            </div>
            {totalPages > 1 && <Pagination page={+page} totalPages={totalPages}/>}
        </div>
    );
};