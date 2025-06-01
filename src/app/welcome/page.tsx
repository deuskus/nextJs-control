"use client";
import {InitUserSessionWrapper} from "@/components/InitUserSessionWrapper";
import Link from "next/link";
import {useAppDispatch} from "@/redux/hooks/useAppDispatch";
import {userActions} from "@/redux/slices/user-slice/userSlice";
import {useRouter} from "next/navigation";

function WelcomeContent() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleGuestLogin = () => {
        dispatch(userActions.guestLogin());
        router.push('/movies');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-white to-neutral-800 px-4">
            <div className="w-full max-w-4xl flex flex-col md:flex-row items-start justify-center gap-12">
                <div className="flex-1 flex flex-col items-start justify-center gap-8">
                    <span className="uppercase tracking-widest text-gray-400 text-sm mb-2 ml-1">Your Movie Gateway</span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-tight">
                        Discover Movies<br />
                        When it Matters
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-2">
                        Explore, search and enjoy the world of cinema. Fast, simple and always up-to-date. Your gateway to the best films online!
                    </p>
                </div>
                <div className="flex flex-col gap-4 md:gap-6 md:mt-12 w-full md:w-auto md:items-end">
                    <Link
                        href="/login"
                        className="px-8 py-3 text-lg bg-black text-white rounded-lg font-semibold shadow-md hover:bg-neutral-800 transition-all duration-200 text-center w-64 border-2 border-transparent hover:border-gradient-to-r hover:from-emerald-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        style={{boxShadow: '0 0 16px 2px rgba(16,185,129,0.15)'}}>
                        Log In
                    </Link>
                    <button
                        onClick={handleGuestLogin}
                        className="px-8 py-3 text-lg bg-white border-2 border-black text-black rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-all duration-200 text-center w-64 border-gradient-to-r from-emerald-400 to-blue-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
                        style={{boxShadow: '0 0 16px 2px rgba(16,185,129,0.15)'}}>
                        Continue as a Guest
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function WelcomePage() {
    return (
        <InitUserSessionWrapper>
            <WelcomeContent />
        </InitUserSessionWrapper>
    );
} 