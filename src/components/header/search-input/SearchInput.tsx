import {IoSearch} from "react-icons/io5";
import {useSearchHandler} from "./useSearchHandler.ts";

export const SearchInput = () => {
    const {inputRef, handleKeyDown} = useSearchHandler();
    return (
        <div className='relative w-full'>
            <input
                ref={inputRef}
                type='text'
                placeholder='Search...'
                onKeyDown={handleKeyDown}
                className='
                    bg-slate-50 rounded-3xl w-full
                    px-4 py-2 text-base
                    max-[1000px]:px-3 max-[1000px]:py-1.5 max-[1000px]:text-sm
                    transition-all duration-200'/>
            <IoSearch className='absolute top-1/2 -translate-y-1/2 right-4 text-xl max-[1000px]:text-base text-gray-500' />
        </div>
    );
};