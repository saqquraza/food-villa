import { CDN_Img_Url } from "../Utils/common";

const RestaurantMenuList = ({ menuList }) => {

  return (
    <>
      {menuList?.map((menu) => {
        return (
          <div className="restaurant-menu-list" key={menu?.card?.info?.id}>
            <div style={{ marginTop: "-5px", width: "80%" }}>
              <p className="dish-name">{menu?.card?.info?.name}</p>
              <p style={{ fontWeight: "500", marginTop: "0px" }}>
                ₹{menu?.card?.info?.price / 100}
              </p>
              <p className="restaurant-address">
                {menu?.card?.info?.description}
              </p>
            </div>
            <div style={{ marginTop: "10px" }}>
              <img
                src={CDN_Img_Url + menu?.card?.info?.imageId}
                alt={menu?.card?.info?.name?.split(' ')[0]}
                width={95}
                height={95}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
export default RestaurantMenuList;
