import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Home = () => {

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/character`;
    axios.get(URL).then((res) => {
      setData([...res.data.results]);
    });
  }, []);



  const handleSearch = (e) => {

    setFilterData(
      data.filter((ele) => {
        if (ele.name.toLowerCase() === search) {
          return ele;
        }
        else if(ele.status.toLowerCase() == search){
            return ele
        }
        else if(ele.gender.toLowerCase() == search){
            return ele
        }
        else if(ele.species.toLowerCase() == search){
            return ele
        }
      })
    
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div>
          <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search.." /> 
          <button className="btn btn-sm btn-dark" onClick={handleSearch} >Search</button>
        </div>

        {filterData.length > 1
          ? filterData.map((ele, index) => <Card data={ele} index={index} />)
          : data.map((ele, index) => <Card data={ele} index={index} />)}
      </div>
    </div>
  );
};

export default Home;
