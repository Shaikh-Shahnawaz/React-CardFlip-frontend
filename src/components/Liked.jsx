import React, { useEffect, useState } from "react";
import axios from "axios";

const Liked = () => {
  const [likedData, setLikedData] = useState([]);

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/character`;
    axios.get(URL).then((res) => {
      let localData = localStorage.getItem("liked");
      setLikedData(
        res.data.results.filter((ele) => {
          if (localData.includes(ele.name)) return ele;
        })
      );
    });

   
  }, []);

  function handleRemove() {
    setLikedData([])
    localStorage.clear()
  }

  return (
    <div className="container">
      <h3>Liked Character</h3>

      <button className="btn btn-dark" onClick={handleRemove}>
        Clear Liked
      </button>

      <div className=" row">
        {likedData.map((ele) => (
          <div className="col-md-3 my-3">
            <div class=" card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={ele.image} alt="Card image cap" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Liked;
