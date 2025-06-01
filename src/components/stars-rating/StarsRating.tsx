import {FC} from "react";
import {getStarsRating} from "./helpers.tsx";

type StarsRatingProp = {
    rating: number;
}

export const StarsRating:FC<StarsRatingProp> = ({rating}) => {
    const stars = getStarsRating(rating);

    return (
        <div className='flex'>
            {stars.map((star, index) => (
                <div key={index} className=' flex text-amber-500 text-xl'>
                    {star}
                </div>
            ))}
        </div>
    );
};