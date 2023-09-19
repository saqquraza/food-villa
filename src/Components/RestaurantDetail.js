import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_RestDetail_By_id } from "../Utils/common";
import RestaurantInfoDetail from "./RestaurantInfoDetail";
import RestaurantMenuList from "./RestaurantMenuList";
import Shimmer from "./Shimmer";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [menuList, setmenuList] = useState([]);

  const fetchRestaurantDetailById = async () => {
    try {
      const resp = await fetch(CDN_RestDetail_By_id + id);
      const data = await resp.json();
      setRestaurantInfo(data?.data?.cards[0]?.card?.card?.info);
      setmenuList(
        data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards
      );
    } catch (err) {
      console.log(err);
    }
  };
console.log(menuList)
  useEffect(() => {
    fetchRestaurantDetailById();
  }, [id]);

  if(menuList?.length===0){
    return <Shimmer/>
  }

  return (
    <div>
      <RestaurantInfoDetail restaurantInfo={restaurantInfo} />
      <hr />
      <RestaurantMenuList menuList={menuList?.slice(0,7)}/>
    </div>
  );
};
export default RestaurantDetail;
