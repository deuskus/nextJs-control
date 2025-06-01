"use client";
import {FC} from "react";
import Link from "next/link";
import {GenresListItems} from "../../genres-list-items/GenresListItems";
import {AuthMenu} from "../auth-menu/AuthMenu";
import {IoHeartOutline} from "react-icons/io5";

type HamburgerMenuProps = {
    isOpen: boolean;
    toggle: () => void;
}

export const HamburgerMenu:FC<HamburgerMenuProps> = ({isOpen, toggle}) => {
    return (
        <>
            <div
                className={`min-[1001px]:hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <nav className='flex flex-col items-center gap-4 py-4 bg-emerald-600 w-full text-center'>
                    <Link href='/movies' onClick={toggle}>Movies</Link>
                    <Link href='/favorites' onClick={toggle} className='flex items-center gap-2'>
                        <IoHeartOutline className="text-xl" />
                        Favorites
                    </Link>
                    <details className='w-full'>
                        <summary className='cursor-pointer py-1'>Genres</summary>
                        <ul className='grid grid-cols-2 gap-2 mt-2 text-sm px-4'>
                            <GenresListItems/>
                        </ul>
                    </details>
                    <div className='hidden max-[1001px]:flex items-center gap-6'>
                        <AuthMenu/>
                    </div>
                </nav>
            </div>
        </>
    );
};