import React from "react";
import "./LoginPopup.css";
const LoginPopup = () => {
  return <div className="loginPopup">
    <h2>Login</h2>
    <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <button>Register</button>
      <p>Forgot Password?</p>
      <button className="closeButton">Close</button>
    </form>
  </div>;
};

export default LoginPopup;
