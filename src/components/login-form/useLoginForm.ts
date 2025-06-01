"use client";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {ILoginData} from "@/models/ILoginData";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "@/validators/userValidator";
import {useAppDispatch} from "@/redux/hooks/useAppDispatch";
import {useRouter} from "next/navigation";
import {userActions} from "@/redux/slices/user-slice/userSlice";

export const useLoginForm = () => {
    const [showError, setShowError] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<ILoginData>({
        mode: "onBlur", resolver: joiResolver(userValidator)
    });
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handlerLogIn = async (formData: ILoginData) => {
        const result = await dispatch(userActions.logIn(formData));
        if (userActions.logIn.fulfilled.match(result)) {
            router.push('/movies');
        } else {
            setShowError(true);
        }
    };

    return {
        showError,
        handleSubmit,
        handlerLogIn,
        errors,
        register,
        isValid
    }
}