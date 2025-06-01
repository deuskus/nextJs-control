"use client";

import {SearchInput} from "./search-input/SearchInput";
import {HeaderLogo} from "./header-logo/HeaderLogo";
import {Menu} from "./menu/Menu";
import {AuthMenu} from "./auth-menu/AuthMenu";
import {HamburgerMenu} from "./hamburger-menu/HamburgerMenu";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoHeartOutline} from "react-icons/io5";
import Link from "next/link";
import {useState} from "react";

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
    }

    return (
        <div className='relative bg-black z-30 text-xl font-medium'>
            <div className='flex justify-between items-center px-8 h-[70px] w-full'>
                <div className='flex items-center'>
                    <HeaderLogo title="NETFilms"/>
                </div>
                <div className='flex-1 flex justify-center'>
                    <Menu/>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='hidden min-[1001px]:flex items-center'>
                        <div className='w-64 mr-6 -ml-[30px]'><SearchInput /></div>
                        <Link 
                            href="/favorites" 
                            className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition mr-4'
                        >
                            <IoHeartOutline className="text-xl" />
                            Favorites
                        </Link>
                        <AuthMenu />
                    </div>
                    <button
                        className='min-[1001px]:hidden p-2 text-2xl text-white font-bold tracking-wide bg-transparent border-none shadow-none hover:text-neutral-300 transition-colors'
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                    >
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>
            <HamburgerMenu isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />
        </div>
    );
};