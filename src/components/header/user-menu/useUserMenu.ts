"use client";
import {useState} from "react";
import {useAppDispatch} from "@/redux/hooks/useAppDispatch";
import {useRouter} from "next/navigation";
import {userActions} from "@/redux/slices/user-slice/userSlice";

export const useUserMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(userActions.logOut());
        router.push("/login");
    };

    const toggleMenu = () => {
        if (window.innerWidth <= 1000) {
            setShowMenu(prev => !prev);
        }
    };

    const handleMouseEnter = () => {
        if (window.innerWidth > 1000) setShowMenu(true);
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 1000) setShowMenu(false);
    };

    return {
        showMenu,
        toggleMenu,
        handleMouseEnter,
        handleMouseLeave,
        handleLogout
    };
};