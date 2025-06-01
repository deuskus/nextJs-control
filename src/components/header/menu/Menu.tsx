"use client";
import Link from "next/link";
import {useState, useMemo} from "react";
import {GenresListItems} from "../../genres-list-items/GenresListItems";

export const Menu = () => {
    const [showGenres, setShowGenres] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <>
            <nav className='hidden min-[1001px]:flex items-center gap-6'>
                <Link 
                    href='/movies' 
                    className='text-white font-bold text-3xl tracking-wide hover:text-neutral-300 transition animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto]'
                    style={{
                        animation: 'gradient 3s linear infinite'
                    }}
                >
                    Movies
                </Link>
                <div
                    className='relative h-[10dvh] flex items-center'
                    style={{position: 'relative'}}
                    onMouseEnter={() => setShowGenres(true)}
                    onMouseLeave={() => setShowGenres(false)}
                >
                    <button className='text-white font-bold text-3xl tracking-wide hover:text-neutral-300 transition'>Genres</button>
                    <div
                        className={`
                            hidden min-[1001px]:block
                            absolute top-[10dvh] left-1/2 -translate-x-1/2 w-[420px] bg-neutral-900 text-white text-base py-4 px-6
                            rounded-2xl shadow-2xl border border-neutral-700
                            transition-all duration-300 ease-in-out z-40
                            ${showGenres ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}
                        `}
                        style={{maxHeight: '24rem', overflowY: 'auto'}}
                    >
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search genres..."
                            className="mb-3 w-full px-3 py-2 rounded-lg bg-neutral-800 text-white placeholder:text-gray-400 border-2 border-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <ul className='flex flex-col gap-2 w-full scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900'>
                            <GenresListItems search={search}/>
                        </ul>
                    </div>
                </div>
            </nav>
            <style>
                {`
                    @keyframes gradient {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}
            </style>
        </>
    );
};