import React from "react";
import Logo from "../../assets/images/logo.png";
import AppSearchBar from "../AppSearchBar";
import AppSearchMenu from "../AppSearchMenu";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "primereact/button";
import AppHamburger from "../AppHamburger";
import "./AppNavbar.css";

const AppNavbar = ({ menu, placeholder }) => {
  const history = useHistory();

  const onSubmitHandler = (keywords) => {
    if (keywords) {
      history.push(`/search?q=${keywords}`);
      // getAllNews(keywords);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <AppHamburger />
        <div className="navbar">
          <div className="search-header">
            <div className="logo">
              <Link to="/">
                <img
                  src={Logo}
                  // onClick={() => onClickLogo()}
                />
              </Link>
            </div>
            <div className="search-bar">
              <AppSearchBar
                label={<i className="far fa-search"></i>}
                placeholder={placeholder}
                onSubmit={onSubmitHandler}
              />
              <AppSearchMenu />
            </div>
          </div>
          <div className="login-signup">
            <a href="#" className="login">
              Login
            </a>
            <a href="#" className="signup">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppNavbar;
