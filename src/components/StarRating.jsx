import React, { useState } from 'react'
import '../css/StarRating.css'
 import { RiStarSFill } from 'react-icons/ri';

const StarRating = ({noOfStars= 5}) => {
    const [hover, setHover] = useState(null)
    const [starRating, setStarRating] = useState(0);

    const handleStarRating = (id)=> {
        setStarRating(id);
        console.log(id)
    }

    const handleMouseOver = (id)=> {
       setHover(id)
       console.log(id)
    }
    const handleMouseRelease = ()=> {
        setHover(null);
    }
  return (
    <div>
        {
            [...Array(noOfStars)].map((_, index)=> {
                index += 1;
                return(
                    <RiStarSFill key={index}
                    className={index <= (starRating || hover) ? 'active':'not-active'}
                    onMouseOver={()=> handleMouseOver(index)}
                    onMouseLeave={()=> handleMouseRelease()}
                    onClick={()=> handleStarRating(index)}
                    />
                )
            })
        }
    </div>
  )
}

export default StarRating