import "./App.css";
import Header from "../src/Components/Header";
import { Outlet } from "react-router-dom";
import Location from "./Components/Geolocation/Location";

function App() {
  return (
    <>
      {/* {Header()} */}
      <Header />
      <div style={{margin:"0 10% 0 10%"}}>
        <Outlet />
      </div>
      <Location />
    </>
  );
}

export default App;
