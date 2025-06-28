import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
const Navbar = ({ setlogin }) => {
  const [menu, setmenu] = useState("Home");
  const { getTotalCartItems } = useContext(StoreContext);
  const totalItems = getTotalCartItems();
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          className={menu === "Home" ? "active" : ""}
          onClick={() => {
            setmenu("Home");
          }}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={menu === "Menu" ? "active" : ""}
          onClick={() => {
            setmenu("Menu");
          }}
        >
          Menu
        </a>
        <a
          href="#appDownload"
          className={menu === "Mobile-app" ? "active" : ""}
          onClick={() => {
            setmenu("Mobile-app");
          }}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          className={menu === "Contact-us" ? "active" : ""}
          onClick={() => {
            setmenu("Contact-us");
          }}
        >
          Contact-us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket icon" />
          {totalItems === 0 ? "" : <div className="dot">{totalItems}</div>}
        </div>
        <button onClick={() => { setlogin(true) }}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
