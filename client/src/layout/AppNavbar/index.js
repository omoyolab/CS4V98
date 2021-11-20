import React from "react";
import Logo from "../assets/images/logo.png";
import AppSearchBar from "../../components/AppSearchBar";
import AppSearchMenu from "../../components/AppSearchMenu";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AppNavbar = ({
  menu,
  onChange,
  onClick,
  onKeypress,
  keywords,
  onClickLogo,
  placeholder,
}) => {
  useEffect(() => {
    window.onscroll = () => {
      const element = document.getElementById("menu");
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
      <div id="menu" className="appMenu ">
        <div className="container-fluid">
          <div className="navbar">
            <div className="searchHeader">
              <div className="logo">
                <Link to="/">
                  <img src={Logo} onClick={() => onClickLogo()} />
                </Link>
              </div>
              <div className="searchBar">
                <AppSearchBar
                  label={<i className="far fa-search"></i>}
                  placeholder={placeholder}
                  onChange={onChange}
                  onClick={onClick}
                  onKeypress={onKeypress}
                  keywords={keywords}
                />
                {menu && menu()}
              </div>
            </div>
            <div className="login">
              <i className="fas fa-user"></i>
              <a href="#">
                <p>Login | Signup</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppNavbar;
