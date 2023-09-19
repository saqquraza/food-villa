import React from "react";
import "./card.css";
import { CDN_Img_Url } from "../../Utils/common";
import { MdStars } from "react-icons/md";
import { GiRoundStar } from "react-icons/gi";

const Mycard = ({ cuisine }) => {
  // console.log(cuisine);
  return (
    <>
      <div>
        {cuisine?.info ? (
          <div className="mycard">
            <img
              style={{ width: "100%", height: "150px", borderRadius: "10px" }}
              src={CDN_Img_Url + cuisine?.info?.cloudinaryImageId}
              // alt={cuisine?.action?.text}
              // width={200}
            />

            <h2
              style={{
                margin: "0px",
                fontFamily: "math",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "-0.3px",
                color: "rgba(2, 6, 12, 0.75)",
                overflow: "hidden",
                width: "100%",
                //  margin: 0px;
              }}
            >
              {cuisine?.info?.name?.slice(0, 25)}
            </h2>
            <div
              style={{
                display: "flex",
                margin:"-3px"
              }}
            >
              <div
                style={{
                  margin: "2px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "rgb(43 119 12 / 93%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GiRoundStar
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "200",
                  }}
                />
              </div>
              <h3
                style={{
                  margin: "1px",
                  fontFamily: "sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  letterSpacing: "-0.3px",
                  color: "rgba(2, 6, 12, 0.75)",
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                {cuisine?.info?.avgRating}
              </h3>
            </div>
            <h3
              style={{
                margin: "2px",
                fontFamily: "monospace",
                fontSize: "15px",
                fontWeight: "400",
                letterSpacing: "-0.3px",
                color: "rgba(2, 6, 12, 0.75)",
                overflow: "hidden",
                width: "100%",
              }}
            >
              {cuisine?.info?.cuisines.slice(0, 3).join(", ")}
            </h3>
            <h2
              style={{
                margin: "2px",
                fontFamily: "monospace",
                fontSize: "15px",
                fontWeight: "400",
                letterSpacing: "-0.3px",
                color: "rgba(2, 6, 12, 0.75)",
                overflow: "hidden",
                width: "100%",
              }}
            >
              {cuisine?.info?.areaName}
            </h2>
          </div>
        ) : (
          <img
            src={CDN_Img_Url + cuisine?.imageId}
            alt={cuisine?.action?.text}
            width={150}
          />
        )}
      </div>
    </>
  );
};

export default Mycard;
