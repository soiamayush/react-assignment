import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="/src/assets/dog-house.svg" alt="home" />
      </Link>
      <Link to="/employees">
        <img src="/src/assets/profile.svg" alt="user" />
      </Link>
    </div>
  );
};

export default Navbar;
