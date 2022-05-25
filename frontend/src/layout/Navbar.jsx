import React from "react";
import "../layout/Layout.css";
import { MenuRounded } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";

import { GiSpotedFlower } from "react-icons/gi";

const Navbar = ({ click }) => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="flex-div">
          <h3>App that makes you feel good</h3>
        </div>
        <div className="navbar-logo">
          <Link to="/">
            <GiSpotedFlower className="navbar-icon" />
          </Link>
        </div>
        <div className="navbar-div">
          <NavLink to="/" className="nav-item" activeClassName="active">
            Posts
          </NavLink>
          <NavLink to="/quotes" className="nav-item" activeClassName="active">
            Quotes
          </NavLink>
        </div>
        <div className="hamburger-menu" onClick={click}>
          <MenuRounded size="30" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
