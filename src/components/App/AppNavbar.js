import React from "react";
import AppNavbarTabs from "./AppNavbarTabs";
import slikamovie from "../../assets/images/movie.svg";
import "./style.css";

const AppNavbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <img src={slikamovie} alt="slika" />
        <div className="navbar-tabs">
          <AppNavbarTabs />
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
