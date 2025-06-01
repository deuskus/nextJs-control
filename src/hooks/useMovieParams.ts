import {useSearchParams} from "next/navigation";
import {IMovieParams} from "@/models/IMovieParams";

export const useMovieParams = (): IMovieParams => {
    const searchParams = useSearchParams();
    const params = {
        page: searchParams?.get('page') || '1',
        sort_by: searchParams?.get('sort_by') || '',
        query: searchParams?.get('query') || '',
        with_genres: searchParams?.get('with_genres') || '',
    };
    const filteredParams: IMovieParams = {page: params.page};

    for (const [key, value] of Object.entries(params)) {
        if (value) {
            filteredParams[key as keyof IMovieParams] = value;
        }
    }

    return filteredParams;
};