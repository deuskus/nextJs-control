import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserWithTokens} from "../../../models/IUserWithTokens.ts";
import {logIn} from "./thunks/logInThunk.ts";
import {removePending, setPending} from "../helpers/helpers.ts";

type InitialUserType = {
    user: IUserWithTokens | null;
    isGuest: boolean;
    isLoading: boolean;
}

const initialUserState: InitialUserType = {user: null, isGuest: false, isLoading: false};

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialUserState,
    reducers: {
        guestLogin: (state) => {
            state.user = null;
            state.isGuest = true;
            localStorage.removeItem('user');
            localStorage.setItem('sessionType', 'guest');
        },
        logOut: (state) => {
            state.user = null;
            state.isGuest = false;
            localStorage.removeItem('user');
            localStorage.removeItem('sessionType');
        }
    },
    extraReducers: builder => {
        builder
            .addCase(logIn.pending, setPending)
            .addCase(logIn.fulfilled, (state, action: PayloadAction<IUserWithTokens>) => {
                state.user = action.payload;
                localStorage.setItem('user', JSON.stringify(action.payload));
                localStorage.setItem('sessionType', 'user');
                state.isLoading = false;
        })
            .addCase(logIn.rejected, removePending)
    }
})

export const userActions = {
    ...userSlice.actions,
    logIn,
};