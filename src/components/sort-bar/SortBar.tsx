import {useSortHandle} from "../../hooks/useSortHandle.ts";
import {useState} from "react";

const sortOptions = [
    { value: 'popularity.desc', label: 'Popularity' },
    { value: 'vote_average.desc', label: 'Rating' },
    { value: 'vote_count.desc', label: 'Reviews' },
    { value: 'primary_release_date.desc', label: 'Release year' },
    { value: 'title.desc', label: 'Title' },
];

export const SortBar = () => {
    const {sortBy, handleSortChange} = useSortHandle();
    const [open, setOpen] = useState(false);
    const current = sortOptions.find(o => o.value === sortBy) || sortOptions[0];

    return (
        <div className='flex items-center gap-2 self-start w-1/3 max-[1073px]:w-full max-[1073px]:justify-start text-sm px-2 mt-2 relative z-20'>
            <label className="text-black">Sort by:</label>
            <div className="relative w-48">
                <button
                    type="button"
                    className="w-full bg-white text-black rounded-md border border-black px-4 py-2 flex justify-between items-center shadow-sm hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    onClick={() => setOpen(o => !o)}
                >
                    <span className="text-black">{current.label}</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {open && (
                    <ul className="absolute left-0 mt-2 w-full bg-white border border-black rounded-md shadow-lg z-30">
                        {sortOptions.map(option => (
                            <li key={option.value}>
                                <button
                                    className={`w-full text-left px-4 py-2 transition-colors text-black ${option.value === sortBy ? 'font-bold' : ''} hover:bg-black hover:text-white`}
                                    onClick={e => {
                                        setOpen(false);
                                        handleSortChange({target: {value: option.value}} as any);
                                    }}
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};