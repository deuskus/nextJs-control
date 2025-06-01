import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginData} from "../../../../models/ILoginData.ts";
import {loginService} from "../../../../services/login.service.ts";

export const logIn = createAsyncThunk(
    'userSlice/logIn',
    async ({username, password}: ILoginData, thunkAPI) => {
        const user = await loginService.loginAuth({username, password});
        return thunkAPI.fulfillWithValue(user);
    }
)