import React, { useEffect, useState } from "react";

import ReactCardFlip from "react-card-flip";
import Heart from "react-animated-heart";

const Card = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isClick, setClick] = useState(false);


  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLiked = (data) => {
    setClick(!isClick)

    if(!isClick){

      let liked = []
      
      if(localStorage.getItem('liked')){
        liked = JSON.parse(localStorage.getItem('liked'))
      }
      liked.push(data)
      localStorage.setItem('liked',JSON.stringify(liked))
      
    }

  };

  return (
    <div className="my-3 col-md-3">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div class="card" style={{ width: "18rem" }}>
          <img
            onClick={handleClick}
            class="card-img-top"
            src={data.image}
            alt="Card image cap"
          />
          <p style={{position:'absolute',bottom:'-50px',right:'-10px'}}>
            <Heart isClick={isClick} onClick={() => handleLiked(data.name)} />
          </p>
        </div>

        <div onClick={handleClick} class="card" style={{ width: "18rem" }}>
          <div class="card-body text-start">
            <h5 class="card-title text-center">{data.name}</h5>
            <p class="card-text">
              {" "}
              <b>Status:</b> {data.status}
            </p>
            <p class="card-text">
              <b>Gender:</b> {data.gender}
            </p>
            <p class="card-text">
              <b>Species:</b> {data.species}
            </p>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
