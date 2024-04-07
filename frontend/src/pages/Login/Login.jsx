import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import LLogin from './components/LLogin';

  
   const loroute = () => {
    <Route path="/login" element = {<LLogin/>} className="button-57"/>
   }
const Hero = () => {
  return (
    <div className="hero">
      <img src="mbok.jpg" alt="" />
      <h3>Read Zone</h3>
      <h6>-Cyber Storm</h6>
      <div className="left">
        <h1>Your Personalized Book Self at the</h1>
        <h2>Read Zone</h2>
      </div>
      <div className="dolf">
      <BrowserRouter>
      <Routes>
        <h1>hi</h1>
        
        
  <Button onClick= {loroute} className="button-57">  
          <span  className="text">Login</span>
          <span>Padhte hai</span></Button>
        
   </Routes>
   </BrowserRouter>
      </div>
    </div>
  );
};

export default Hero;
