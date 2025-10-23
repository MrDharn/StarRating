import React, { useState } from 'react'
 import { RiStarSFill } from 'react-icons/ri';

const StarRating = (noOfStars = 5) => {
    const [hover, setHover] = useState(0)
    const [star, setRating] = useState(0);

    const handleStarRating = ()=> {
        console.log("Yo There");
    }

    const handleMouseOver = ()=> {
        console.log("Hello");
    }
    const handleMouseRelease = ()=> {
        console.log("hi");
    }
  return (
    <div>
        {
            [...Array(5)].map((_, index)=> {
                index += 1;
                return(
                    <RiStarSFill
                    onMouseOver={()=> handleMouseOver()}
                    onMouseLeave={()=> handleMouseRelease()}
                    onClick={()=> handleStarRating(index)}/>
                )
            })
        }
    </div>
  )
}

export default StarRating