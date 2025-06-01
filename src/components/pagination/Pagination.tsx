import {FC} from "react";
import {usePagination} from "./usePagination.ts";


type PaginationProps = {
    page: number;
    totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({page, totalPages}) => {
    const {handlePrevious, handleNext} = usePagination(page, totalPages);
    return (
        <div className='flex w-full justify-center gap-10'>
            <button
                onClick={handlePrevious}
                className='flex items-center justify-center w-12 h-12 rounded-lg border border-neutral-700 bg-neutral-900 text-white text-2xl hover:bg-neutral-700 transition disabled:opacity-40'
                disabled={page === 1}
                aria-label='Previous page'
            >
                <span>&larr;</span>
            </button>
            <button
                onClick={handleNext}
                className='flex items-center justify-center w-12 h-12 rounded-lg border border-neutral-700 bg-neutral-900 text-white text-2xl hover:bg-neutral-700 transition disabled:opacity-40'
                disabled={page === totalPages}
                aria-label='Next page'
            >
                <span>&rarr;</span>
            </button>
        </div>
    );
};