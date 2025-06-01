"use client";
import {UserMenu} from "../user-menu/UserMenu";
import Link from "next/link";
import {IoLogInOutline} from "react-icons/io5";
import {useAppSelector} from "@/redux/hooks/useAppSelector";

export const AuthMenu = () => {
    const user = useAppSelector(state => state.userStore.user);
    return user ? <UserMenu user={user}/> : (
        <Link href='/login' className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition'>
            <IoLogInOutline className="text-xl" />
            Log In
        </Link>
    );
};