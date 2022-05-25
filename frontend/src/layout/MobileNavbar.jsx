import React from "react";
import "./Layout.css";
import { Link, NavLink } from "react-router-dom";

function MobileNavbar({ show, click }) {
  const mobileNavbarClass = ["mobile-navbar"];
  if (show) {
    mobileNavbarClass.push("show");
  }

  return (
    <div className={mobileNavbarClass.join(" ")} onClick={click}>
      <div className="mobile-navbar-div">
        <NavLink className="nav-item-mobile" activeClassName="active-mobile" to="/">Posts</NavLink>
        <NavLink className="nav-item-mobile" activeClassName="active-mobile" to="/quotes">Quotes</NavLink>
      </div>
    </div>
  );
}

export default MobileNavbar;
