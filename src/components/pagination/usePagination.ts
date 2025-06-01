import {useRouter, useSearchParams} from "next/navigation";

export const usePagination = (page: number, totalPages: number) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePrevious = () => {
        if (page - 1 > 0) {
            const params = new URLSearchParams(Array.from((searchParams ?? new URLSearchParams()).entries()));
            params.set('page', (page - 1).toString());
            router.push(`?${params.toString()}`);
        }
    };

    const handleNext = () => {
        if (page + 1 <= totalPages) {
            const params = new URLSearchParams(Array.from((searchParams ?? new URLSearchParams()).entries()));
            params.set('page', (page + 1).toString());
            router.push(`?${params.toString()}`);
        }
    };

    return {
        handlePrevious,
        handleNext,
    };
};