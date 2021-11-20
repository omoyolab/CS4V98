import React from "react";
import { Link } from "react-router-dom";
import "./TermsPolicy.css";

const footerMenu = [
  { to: "/terms", menu: "Terms" },
  { to: "/privacy", menu: "Privacy" },
  { to: "/about", menu: "About" },
  { to: "/", menu: "Ads" },
  { to: "/", menu: "Careers" },
  { to: "/", menu: "Help" },
  { to: "/", menu: "Feedback" },
];

const TermsPolicy = () => {
  return (
    <>
      <p className="terms-policy">
        {footerMenu.map((x, index) => (
          <Link to={x.to} className="link" key={index}>
            {x.menu + " "}
          </Link>
        ))}
      </p>
      <p> © 2021 9jaHive. All rights reserved.</p>
    </>
  );
};

export default TermsPolicy;
