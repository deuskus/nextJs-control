"use client";
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import {InitUserSessionWrapper} from "@/components/InitUserSessionWrapper";
import {useEffect, useState} from "react";
import {MovieInfo} from "@/components/movie-info/MovieInfo";
import {movieService} from "@/services/movie.service";
import {IMovie} from "@/models/IMovie";
import React from "react";

export default function MoviePage({ params }: { params: Promise<{ movieId: string }> }) {
    const { movieId } = React.use(params);
    const [movie, setMovie] = useState<IMovie | null>(null);
    useEffect(() => {
        movieService.getMovieById && movieService.getMovieById(movieId).then(setMovie);
    }, [movieId]);
    if (!movie) return (
        <Provider store={store}>
            <InitUserSessionWrapper>
                <div>Loading...</div>
            </InitUserSessionWrapper>
        </Provider>
    );
    return (
        <Provider store={store}>
            <InitUserSessionWrapper>
                <MovieInfo movie={movie} />
            </InitUserSessionWrapper>
        </Provider>
    );
} 