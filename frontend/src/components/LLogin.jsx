import React from "react";
import "../pages/Login/Style.css"; // Import your CSS file here
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function LLogin() {
  return (
    <div className="container">
      <div className="login">
        <h1>Login</h1>
        <form action="/login" method="post">
          <div className="input-box">
            <input type="email" name="email" placeholder="Email" />
            <i className="fa fa-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" name="password" />
            <i className="fa fa-lock"></i>
          </div>
          <button type="submit">Register</button>
          <div className="links">
            <a href="y">Forgot password</a>
            <a href="/register">You don't have an account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LLogin;