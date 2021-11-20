import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="menu">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <ul>
            <li>
              <Link to="/about" className="pageLink">
                About
              </Link>
            </li>
            <li>
              <Link to="/advertising" className="pageLink">
                Advertising
              </Link>
            </li>
            <li>
              <Link to="/terms" className="pageLink">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="pageLink">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/addaccount" className="pageLink">
                Ad Account
              </Link>
            </li>
            <li>
              <Link to="/contact" className="pageLink">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
