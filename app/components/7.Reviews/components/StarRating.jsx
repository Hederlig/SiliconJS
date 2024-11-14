

import Image from "next/image";
import "./StarRating.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';


<Image className="star" src={solidStar} alt="" />
export default function StarRating({ starRating }) {

  const totalStars = 5;
  const validRating = Math.max(0, Math.min(5, starRating));
  const filledStars = Math.floor(validRating); 
  const emptyStars = totalStars - filledStars; 
  if (isNaN(filledStars) || filledStars < 0 || emptyStars < 0) {
    return <div></div>;
  }
  return (
    <>

      {
        [...Array(filledStars)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={solidStar}
            className="star"
          />
        ))
      }

      {
        [...Array(emptyStars)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={regularStar}
            className="star"
          />
        ))
      }

    </>

  );
}