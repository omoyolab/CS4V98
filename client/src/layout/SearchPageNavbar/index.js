import React, { useState, useEffect } from "react";
import AppNavbar from "../../components/AppNavbar";
import Logo from "../../assets/images/logo.png";
import AppSearchBar from "../../components/AppSearchBar";
import { Link } from "react-router-dom";
import AppHamburger from "../../components/AppHamburger";

import "./SearchPageNavbar.css";

const SearchPageNavbar = ({ onClickLogo, onSubmit }) => {
  useEffect(() => {
    window.onscroll = () => {
      const element = document.getElementById("navbar");
      if (element) {
        if (window.pageYOffset > 160) {
          element.classList.add("shadow");
        } else {
          element.classList.remove("shadow");
        }
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <AppHamburger />
      <div id="navbar" className="pageHeader">
        <div style={{ display: "flex", width: "70%" }}>
          <Link to="./">
            <img src={Logo} />
          </Link>

          <div className="searchInput">
            <AppSearchBar
              label={<i className="far fa-search"></i>}
              placeholder=""
              onSubmit={onSubmit}
            />
          </div>
        </div>
        <div className="login">
          <i className="fas fa-user"></i>
          <a href="#">
            <p>Login / Signup</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default SearchPageNavbar;
