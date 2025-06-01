"use client";
import {useMemo} from 'react';
import {useAppSelector} from "@/redux/hooks/useAppSelector";
import {useSearchParams} from "next/navigation";

export const useLoadingClearParams = (
    pageConfig: {
        clearParams?: string[],
        extraParams?: Record<string, string>
    }
) => {
    const { isLoading } = useAppSelector((state) => state.movieStore);
    const searchParams = useSearchParams();
    // Собираем параметры из searchParams
    const params = useMemo(() => {
        const result: Record<string, string> = {};
        searchParams?.forEach((value, key) => {
            result[key] = value;
        });
        // Добавляем/перезаписываем extraParams
        if (pageConfig.extraParams) {
            Object.entries(pageConfig.extraParams).forEach(([key, value]) => {
                result[key] = value;
            });
        }
        // Очищаем clearParams
        if (pageConfig.clearParams) {
            pageConfig.clearParams.forEach(key => {
                delete result[key];
            });
        }
        return result;
    }, [searchParams, pageConfig.extraParams, pageConfig.clearParams]);

    return { isLoading, params };
};