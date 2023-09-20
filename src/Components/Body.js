import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import Imagecarousel from "./Caurosel/ImageCarousel";

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurantFilterList, setRestaurantFilterList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [cuisineList, setCuisineList] = useState({});
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [offerList, setOfferList] = useState([]);

  const fetchRestaurantData = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const resp = await fetch(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
          );
          const data = await resp.json();
          setRestaurantFilterList(
            data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setRestaurantList(
            data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setCuisineList(data?.data?.cards[1]?.card?.card);
          setTopRestaurants(
            data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setOfferList(data?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    }
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const changeHandler = () => {
    let data = restaurantList?.filter((r) => {
      if (r?.info?.name?.toLowerCase().includes(searchTerm?.toLowerCase())) {
        return r;
      } else if (searchTerm === "") {
        return r;
      }
    });
    setRestaurantFilterList(data);
  };
  if (restaurantList?.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <input
        type="text"
        placeholder="Search Restaurant"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: "10px" }}
      />
      <button onClick={changeHandler}>Search</button>
      <Imagecarousel cuisineList={offerList} title="Best offers for you" />
      <Imagecarousel
        cuisineList={cuisineList?.imageGridCards?.info}
        title="What's on your mind?"
      />
      <Imagecarousel
        cuisineList={topRestaurants}
        title="Top restaurant chains in Kolkata"
      />
      {restaurantFilterList?.length === 0 ? (
        <div>Restaurant not found!</div>
      ) : (
        <>
          <h2 style={{ margin: "0px", paddingLeft: "31px" }}>
            Restaurants with online food delivery in Kolkata
          </h2>
          <div className="restaurant-list">
            {restaurantFilterList?.map((r, index) => {
              return <Restaurant {...r?.info} key={index} />;
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Body;
