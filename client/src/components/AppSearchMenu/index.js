import React from "react";
import { Link } from "react-router-dom";
import "./AppSearchMenu.css";

const menuItems = [
  { icon: "fas fa-home", item: " Home", link: "/" },
  { icon: "fas fa-rss", item: "News", link: "/news" },
  { icon: "fas fa-syringe", item: "COVID-19", link: "/covid" },
  { icon: "fad fa-tennis-ball", item: "Sports", link: "/sports" },
  { icon: "fas fa-cogs", item: "Technology", link: "/tech" },
  { icon: "fas fa-video", item: "Entertainment", link: "/entertainment" },
  { icon: "fas fa-vote-yea", item: "Politics", link: "/politics" },
];

const AppSearchMenu = () => {
  return (
    <div className="navbar-menu">
      <ul>
        {menuItems.map((nav, index) => (
          <li key={index}>
            <Link to={nav.link}>
              <div className="menu-item">
                <i className={nav.icon}></i>
                <span>{nav.item}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppSearchMenu;
