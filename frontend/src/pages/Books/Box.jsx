import React from "react";
import "./Books.css";

const Box = (props) => {
  return (
    <div className="boxi">
      <img src={props.img} alt=""></img>
      <h5>{props.text}</h5>
    </div>
  );
};

export default Box;
