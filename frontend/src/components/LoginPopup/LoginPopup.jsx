import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setlogin }) => {
  const [currstate, setcurrstate] = useState("Sign Up");
  return (
    <div className="loginPopup">
      <form className="login_poup_container">
        <div className="login_poup_title">
          <h2>{currstate}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => {
              setlogin(false);
            }}
            className="close_icon"
            alt="close_icon"
          />
        </div>
        <div className="input-container">
          {currstate === "Sign Up" ? (
            <input type="text" placeholder="Your Name" required />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        {}
        <button
          onClick={() => {
            setcurrstate("Sign Up");
          }}
        >
          {currstate === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login_popup_condition">
          <input type="checkbox" id="remember" required />
          <p>lorem ipsum dolor sit amet</p>
        </div>
        {currstate === "Sign Up" ? (
          <p>
            Already have an account?
            <span onClick={() => setcurrstate("Login")}>Login</span>
          </p>
        ) : (
          <p>
            Create A New account?
            <span onClick={() => setcurrstate("Sign Up")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
