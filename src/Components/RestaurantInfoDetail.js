const RestaurantInfoDetail = ({ restaurantInfo }) => {
  const { name, city, areaName, avgRating, cuisines, totalRatingsString } =
  restaurantInfo;
  
  return (
    <div className="restaurant-details">
      <div className="restaurant-detail-info">
        <p className="restaurant-name">{name}</p>
        <p className="restaurant-cuisine">{cuisines?.join(", ")}</p>
        <p className="restaurant-address">{`${areaName}, ${city}`}</p>
      </div>
      <div className="restaurant-rating">
        <p className="restaurant-name">{avgRating}*</p>
        <hr />
        <p className="restaurant-address">{totalRatingsString}</p>
      </div>
    </div>
  );
};
export default RestaurantInfoDetail;
