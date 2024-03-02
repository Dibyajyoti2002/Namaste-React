import React from "react";
import { CDN_URL } from "../utils/constants";

const ResturantCard = ({ data }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    cuisines,
    locality,
    areaName,
  } = data.info;

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="res-img" />
      <h3>{name}</h3>
      <h4>
        🌟🌟🌟 {avgRating} ~{sla.slaString}
      </h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {locality}, {areaName}
      </h4>
    </div>
  );
};

export default ResturantCard;
