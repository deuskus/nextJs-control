import {useSearchParams, useRouter} from "next/navigation";
import {ChangeEvent} from "react";

export const useSortHandle = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const sortBy = searchParams?.get('sort_by') || 'popularity.desc';

    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(Array.from((searchParams ?? new URLSearchParams()).entries()));
        params.set('sort_by', e.target.value);
        router.push(`?${params.toString()}`);
    };

    return {
        sortBy,
        handleSortChange,
    };
};