import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
const Navbar = () => {
  const [menu, setmenu] = useState("Home");
  const { getTotalCartItems } = useContext(StoreContext);
 const totalItems = getTotalCartItems();
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" />
      <ul className="navbar-menu">
        <li
          className={menu === "Home" ? "active" : ""}
          onClick={() => {
            setmenu("Home");
          }}
        >
          Home
        </li>
        <li
          className={menu === "Menu" ? "active" : ""}
          onClick={() => {
            setmenu("Menu");
          }}
        >
          Menu
        </li>
        <li
          className={menu === "Mobile-app" ? "active" : ""}
          onClick={() => {
            setmenu("Mobile-app");
          }}
        >
          Mobile-app
        </li>
        <li
          className={menu === "Contact-us" ? "active" : ""}
          onClick={() => {
            setmenu("Contact-us");
          }}
        >
          Contact-us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket icon" />
          <div className="dot">{totalItems}</div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
