import React from "react";
import "./card.css";
import { CDN_Img_Url } from "../../Utils/common";
import { MdStars } from "react-icons/md";
import { GiRoundStar } from "react-icons/gi";

const Mycard = ({ cuisine, title }) => {
  const imgStyle =
    title === "What's on your mind?"
      ? { width: "180px",  margin: "10px" }
      : { width: "400px", margin: "10px" };

  return (
    <>
      <div>
        {cuisine?.info ? (
          <div className="mycard">
            <img
              style={{ width: "100%", height: "150px", borderRadius: "20px", objectFit:"cover" }}
              src={CDN_Img_Url + cuisine?.info?.cloudinaryImageId}
              alt={cuisine?.info?.name}
            />
            <h2 className="restaurant-name">
              {cuisine?.info?.name?.slice(0, 25)}
            </h2>
            <div
              style={{
                display: "flex",
                margin: "0px",
              }}
            >
              <div className="rating-star">
                <GiRoundStar
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "200",
                  }}
                />
              </div>
              <h3 className="avg-rating">{cuisine?.info?.avgRating}</h3>
            </div>
            <h3 className="cuisines-list">
              {cuisine?.info?.cuisines.slice(0, 3).join(", ")}
            </h3>
            <h3 className="cuisines-list">{cuisine?.info?.areaName}</h3>
          </div>
        ) : (
          <img
            className="carousel-image"
            src={CDN_Img_Url + cuisine?.imageId}
            alt={cuisine?.action?.text}
            style={imgStyle}
          />
        )}
      </div>
    </>
  );
};

export default Mycard;
