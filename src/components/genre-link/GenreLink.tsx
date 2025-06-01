"use client";
import Link from "next/link";
import {FC} from "react";
import {IGenre} from "@/models/IGenre";

type GenreLinkProps = {
    genre: IGenre;
}

export const GenreLink:FC<GenreLinkProps> = ({genre}) => {
    const {id, name} = genre;
    return (
        <Link href={`/genre/${id}`}>{name}</Link>
    );
};