import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1 className="wow animate__animated  animate__fadeInUp">
          Order your favourite food here
        </h1>
        <p className="wow animate__animated  animate__fadeInUp">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="wow animate__animated  animate__fadeInUp">View Menu</button>
      </div>
    </header>
  );
};

export default Header;
