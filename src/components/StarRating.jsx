import React, { useState } from 'react'
 import { RiStarSFill } from 'react-icons/ri';

const StarRating = ({noOfStars= 5}) => {
    const [hover, setHover] = useState(0)
    const [star, setRating] = useState(0);

    const handleStarRating = (id)=> {
        setRating(id);
        console.log(id)
    }

    const handleMouseOver = (id)=> {
       setHover(id)
       console.log(id)
    }
    const handleMouseRelease = (id)=> {
        console.log("hi");
    }
  return (
    <div>
        {
            [...Array(noOfStars)].map((_, index)=> {
                index += 1;
                return(
                    <RiStarSFill key={index}
                    onMouseOver={()=> handleMouseOver(index)}
                    onMouseLeave={()=> handleMouseRelease(index)}
                    onClick={()=> handleStarRating(index)}
                    
                    style={{cursor: "pointer",fontSize: "30px", color: index<= star || index<=hover ? "Gold" : "gray"

                    }}/>
                )
            })
        }
    </div>
  )
}

export default StarRating