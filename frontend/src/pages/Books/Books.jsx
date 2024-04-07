import React from "react";
import "./Books.css";
import Box from "./Box";

const Books = () => {
  return (
    <div id="book">
      <h1>Books You Might Read</h1>
      <div className="underline"></div>
      <div className="content">
        <div className="box">
          <Box img="imag1.jpg" text="20 Coin" />
        </div>
        <div className="box">
          <Box img="imag2.jpg" text="25 Coin" />
        </div>
        <div className="box">
          <Box img="imag3.jpg" text="30 Coin" />
        </div>
      </div>
    </div>
  );
};

export default Books;
