import React from "react";
import { Link } from "react-router-dom";
const Header = () => {

  const characters = localStorage.getItem('liked');
  const likedArray = JSON.parse(characters);

  return (
    <div className="py-3 bg-dark d-flex justify-content-around align-items-center mb-5">
      <h3 className="text-light">Sapio Project</h3>

      <div className="">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/liked" className="ms-4">
          Liked <span>{likedArray? likedArray.length:''}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
