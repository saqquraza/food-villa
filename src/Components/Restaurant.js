import { useNavigate } from "react-router-dom";
import { CDN_Img_Url } from "../Utils/common";
import { routes } from "../routes";

const Restaurant = (prop) => {
  const navigate = useNavigate();
  const { id, name, avgRating, cuisines, locality, cloudinaryImageId } = prop;

  return (
    <div
      className="restaurant-card"
      onClick={() => navigate(`${routes.restaurants}/${name}/${id}`)}
    >
      <img
        src={`${CDN_Img_Url}${cloudinaryImageId}`}
        alt="tea stall"
        style={{ width: "180px", height: "170px" }}
      />
      <h2 style={{ margin: "0px" }}>{name}</h2>
      <h4 style={{ margin: "0px" }}>{avgRating} star</h4>
      <h3 style={{ margin: "0px" }}>{cuisines.slice(0, 2).join(", ")}</h3>
      <h2 style={{ margin: "0px" }}>{locality}</h2>
    </div>
  );
};

export default Restaurant;
