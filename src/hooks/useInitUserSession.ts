"use client";

import {useAppDispatch} from "@/redux/hooks/useAppDispatch";
import {useEffect} from "react";
import {userActions} from "@/redux/slices/user-slice/userSlice";
import {IUserWithTokens} from "@/models/IUserWithTokens";

export const useInitUserSession = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const sessionType = localStorage.getItem('sessionType');

        if (sessionType === 'user') {
            const userStr = localStorage.getItem('user');
            if (userStr) {
                const user: IUserWithTokens = JSON.parse(userStr);
                dispatch({type: 'userSlice/logIn/fulfilled', payload: user});
            }
        } else if (sessionType === 'guest') {
            dispatch(userActions.guestLogin());
        }

    }, [dispatch]);
};