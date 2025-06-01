import {FC} from "react";
import {PageIndicator} from "../page-indicator/PageIndicator.tsx";
import {SortBar} from "../sort-bar/SortBar.tsx";

type MoviesListHeaderProps = {
    title: string;
    totalPages: number;
    totalResults: number;
    page: number;
    query?: string;
}

export const MoviesListHeader: FC<MoviesListHeaderProps> = ({ title, totalPages, totalResults, page, query }) => {
    return (
        <>
            <h2 className='w-full flex justify-center text-3xl text-black'>{title}</h2>

            {query ? (
                <>
                    <h3 className='text-center text-xl'>Search results for <span className='font-semibold'>"{query}"</span></h3>
                    <p className='text-center text-gray-700 text-sm'>Found {totalResults}</p>
                </>
            ) : (
                <SortBar />
            )}

            {totalPages > 1 && <PageIndicator page={+page} />}
        </>
    );
};