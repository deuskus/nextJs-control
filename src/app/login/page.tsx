"use client";
import {Provider} from "react-redux";
import {store} from "@/redux/store";
import {InitUserSessionWrapper} from "@/components/InitUserSessionWrapper";
import {LoginForm} from "@/components/login-form/LoginForm";
import {useAppDispatch} from "@/redux/hooks/useAppDispatch";
import {useEffect} from "react";
import {userActions} from "@/redux/slices/user-slice/userSlice";
import {useRouter} from "next/navigation";

function LoginContent() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(userActions.logOut())
    }, [dispatch]);

    const handleGuestLogin = () => {
        dispatch(userActions.guestLogin());
        router.push('/movies');
    };

    return (
        <div className='w-2/4 h-[50dvh] mx-auto flex flex-col gap-6 justify-center items-center rounded-lg'>
            <h2 className="text-3xl font-extrabold mb-8 text-center text-black tracking-wide">Sign in to NETFilms</h2>
            <LoginForm/>
            <button
                onClick={handleGuestLogin}
                className="px-8 py-3 text-lg bg-white border-2 border-black text-black rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-all duration-200 text-center w-64 border-gradient-to-r from-emerald-400 to-blue-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
                style={{boxShadow: '0 0 16px 2px rgba(16,185,129,0.15)'}}
            >
                Continue as a Guest
            </button>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Provider store={store}>
            <InitUserSessionWrapper>
                <LoginContent />
            </InitUserSessionWrapper>
        </Provider>
    );
} 