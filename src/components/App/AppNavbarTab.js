import React from "react";
import { Link } from "react-router-dom";

const AppNavbarTab = ({ value }) => {
  return (
    // <div>
    // <h2>{value}</h2>
    // </div>
    <Link className="navbar-tab" to={value === "Home" ? "/" : value}>
      <h2>{value}</h2>
    </Link>
  );
};
export default AppNavbarTab;
