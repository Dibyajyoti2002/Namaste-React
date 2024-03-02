import React, { useState } from "react";
import ResturantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
  const [click, setClick] = useState(true);

  function handleClick() {
    setClick(!click);
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>
          Top-Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resObj.map((resData) => {
          if (click) {
            return <ResturantCard key={resData.info.id} data={resData} />;
          } else {
            if (resData.info.avgRating > 4.5) {
              return <ResturantCard key={resData.info.id} data={resData} />;
            } else {
              return null;
            }
          }
        })}
      </div>
    </div>
  );
};

export default Body;
