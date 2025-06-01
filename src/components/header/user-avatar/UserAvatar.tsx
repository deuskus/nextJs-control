import {FC} from "react";
import {IUserWithTokens} from "../../../models/IUserWithTokens.ts";

type UserProps = {
    user: IUserWithTokens;
}

export const UserAvatar: FC<UserProps> = ({user}) => {
    const {firstName, lastName} = user;

    return (
        <div className='rounded-[50%] w-[50px] h-[50px] bg-orange-500 flex items-center justify-center text-2xl'>
            <p>{firstName.slice(0,1)}{lastName.slice(0,1)}</p>
        </div>
    );
};