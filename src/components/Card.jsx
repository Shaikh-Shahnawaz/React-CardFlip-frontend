import React, { useEffect, useState } from "react";

import ReactCardFlip from "react-card-flip";
const Card = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="my-3 col-md-4">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div onClick={handleClick} class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={data.image} alt="Card image cap" />
          
        </div>

        <div  onClick={handleClick} class="card" style={{ width: "18rem" }}>
         
          <div class="card-body text-start">
            <h5 class="card-title text-center">{data.name}</h5>
            <p class="card-text"> <b>Status:</b> {data.status}</p>
            <p class="card-text"><b>Gender:</b> {data.gender}</p>
            <p class="card-text"><b>Species:</b> {data.species}</p>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
