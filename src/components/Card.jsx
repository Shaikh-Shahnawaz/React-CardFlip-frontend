import React, { useEffect, useState } from "react";

import ReactCardFlip from "react-card-flip";
import Heart from "react-animated-heart";

const Card = ({ data,index, }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isClick, setClick] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLiked = (data, i) => {
    setClick(!isClick);

    let liked = [];
    if (!isClick) {
      if (localStorage.getItem("liked")) {
        liked = JSON.parse(localStorage.getItem("liked"));
      }
      liked.push(data);
      localStorage.setItem("liked", JSON.stringify(liked));
      console.log('Liked if ==>> ',liked)
    } else {
      const characters = localStorage.getItem('liked');
      const likedArray = JSON.parse(characters);
      
      likedArray.splice(i,1)
      // const filteredarray = likedArray.filter((ele) => ele.id !== data.id);
      localStorage.setItem('liked', JSON.stringify(likedArray));
      // // alert('Unliked It !!');
      // console.log('Liked data ',liked)
      console.log('characters==>> ',likedArray) 

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
          <p style={{ position: "absolute", bottom: "-50px", right: "-10px" }}>
            <Heart
              isClick={isClick}
              onClick={() => handleLiked(data.name, index)}
            />
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
