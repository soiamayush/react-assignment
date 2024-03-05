import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="home-header">
      <Link to="/">
        <img src="/assets/Group 46.png" alt="contact" />
      </Link>
      <div className="notify">
        <img src="/assets/moptro logo.png" alt="moptro" />
        <div>
          <p>4</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
