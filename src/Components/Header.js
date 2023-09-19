import { Link } from "react-router-dom";
import { routes } from "../routes";

const Header =()=>{
    return (
        <div className="header">
          <img
            src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
            alt="logo"
          />
          <div className="nav-items">
            <ul>
              <li><Link to={routes.home}>Home</Link></li>
              <li><Link to={routes.about}>About us</Link></li>
              <li>Contact</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      );
}
export default Header;