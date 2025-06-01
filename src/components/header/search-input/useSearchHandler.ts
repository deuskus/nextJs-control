"use client";
import {useEffect, useRef} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import * as React from "react";

export const useSearchHandler = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (inputRef.current && searchParams) {
            inputRef.current.value = searchParams.get('query') || '';
        }
    }, [searchParams]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputRef.current) {
            const query = inputRef.current.value.trim();
            if (query.length > 0) {
                router.push(`/search?query=${encodeURIComponent(query)}`);
            } else {
                router.push('/');
            }
        }
    }

    return {
        inputRef,
        handleKeyDown,
    };
};