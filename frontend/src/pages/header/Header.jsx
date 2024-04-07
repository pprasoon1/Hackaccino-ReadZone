import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <section id="header">
        <div className="nav">
          <img src="logm.png" alt=""></img>
          <a href="#home">
            <h5>Home</h5>
          </a>
          <a href="#Books">
            <h5>Books</h5>
          </a>
          <a href="#about">
            <h5>About us</h5>
          </a>
        </div>
        <div>
          <button className="button-23">LogOut</button>
        </div>
      </section>
    </div>
  );
};

export default Header;
