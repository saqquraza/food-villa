import React, { useEffect, useRef } from "react";
import Mycard from "./Card";
import "./imagecarousel.css";
const Imagecarousel = (props) => {
  const boxRef = useRef(null);

  useEffect(() => {
    let box = boxRef.current;
    if (box) {
      box = document.querySelector(".product-container");
    }
  }, []);

  const btnpressprev = () => {
    let box = boxRef.current;
    if (box) {
      let width = box?.clientWidth;
      box.scrollLeft = box?.scrollLeft - width;
    }
  };

  const btnpressnext = () => {
    let box = boxRef.current;
    if (box) {
      let width = box?.clientWidth;
      box.scrollLeft = box?.scrollLeft + width;
    }
  };
  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>
      <h2 style={{ margin: "0px", paddingLeft: "31px" }}> {props?.title}</h2>
      <div className="product-container" ref={boxRef}>
        {props?.cuisineList?.map((c, index) => {
          return <Mycard cuisine={c} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Imagecarousel;
