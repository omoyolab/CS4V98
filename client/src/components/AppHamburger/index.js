import React from "react";
import Logo from "../../assets/images/logo.png";
import AppSearchBar from "../AppSearchBar";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./AppHamburger.css";

const AppHamburger = () => {
  const history = useHistory();
  const menuItems = [
    { icon: "fas fa-rss", item: "News" },
    { icon: "fas fa-syringe", item: "COVID-19" },
    { icon: "fad fa-tennis-ball", item: "Sports" },
    { icon: "fas fa-cogs", item: "Technology" },
    { icon: "fas fa-video", item: "Entertainment" },
    { icon: "fas fa-vote-yea", item: "Politics" },
  ];
  const onSubmitHandler = (keywords) => {
    if (keywords) {
      history.push(`/search?q=${keywords}`);
      // getAllNews(keywords);
    }
  };
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
    <>
      <div className="mobile-container">
        <div className="topnav">
          <a href="#home" className="active">
            <div
              style={{
                display: "flex",
                maxWidth: "90%",
              }}
            >
              <Link to="/">
                <img src={Logo} />
              </Link>
              <div style={{ width: "100%", marginTop: "5px" }}>
                <AppSearchBar
                  label={<i className="far fa-search"></i>}
                  placeholder="Search Nigerian Web"
                  onSubmit={onSubmitHandler}
                />
              </div>
            </div>
          </a>
          <div id="myLinks">
            {menuItems.map((x, index) => (
              <div className="menu-item" key={index}>
                <i className={x.icon}></i>
                <a href="#">{x.item}</a>
              </div>
            ))}
          </div>
          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <i className="fas fa-bars"></i>{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default AppHamburger;
