import {FC} from "react";

export const Footer: FC = () => {
    return (
        <footer className="bg-black text-white py-6 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold">NETFilms</h3>
                            <span className="text-xs text-gray-400">made with ❤️</span>
                        </div>
                        <p className="text-gray-400 mt-2">Your favorite movies in one place</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-white transition-colors">
                            Powered by TMDB
                        </a>
                        <span className="text-gray-400">© 2024</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}; 