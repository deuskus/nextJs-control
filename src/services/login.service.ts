import {axiosLoginInstance} from "./api.service.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {ILoginData} from "../models/ILoginData.ts";

export const loginService = {
    loginAuth: async ({username, password}: ILoginData): Promise<IUserWithTokens> => {
        const response = await axiosLoginInstance.post('/auth/login', {username, password});
        return response.data;
    }
};