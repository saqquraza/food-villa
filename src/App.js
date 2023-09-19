import "./App.css";
import Header from "../src/Components/Header";
import { Outlet } from "react-router-dom";
import Imagecarousel from "./Components/Caurosel/ImageCarousel";
import Location from "./Components/Geolocation/Location";

function App() {
  return (
    <>
      {/* {Header()} */}
      {/* <Imagecarousel/> */}
      <Header />
      <Outlet />
      <Location/>
    </>
  );
}

export default App;
