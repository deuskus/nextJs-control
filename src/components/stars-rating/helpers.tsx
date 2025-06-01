import {FaRegStar, FaRegStarHalfStroke, FaStar} from "react-icons/fa6";
import {ReactElement} from "react";


export const getStarsRating = (rating: number): ReactElement[] => {
    const stars: ReactElement[] = [];
    const fiveRating = rating / 2;

    for (let i = 1; i <= 5; i++) {
        if (fiveRating >= i) {
            stars.push(<FaStar size={20} key={i}/>)
        } else if (fiveRating > i - 0.5) {
            stars.push(<FaRegStarHalfStroke key={i}/> )
        } else {
            stars.push(<FaRegStar key={i}/>)
        }
    }

    return stars;
};