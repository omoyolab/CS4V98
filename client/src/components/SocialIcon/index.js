import React from "react";
import "./SocialIcon.css";

const socialIcon = [
  { icon: "fab fa-facebook-square", url: "https://www.facebook.com" },
  { icon: "fab fa-twitter-square", url: "https://www.twitter.com" },
  { icon: "fab fa-instagram", url: "https://www.instagram.com/" },
  { icon: "fab fa-youtube", url: "https://www.youtube.com" },
];

const SocialIcon = () => {
  return (
    <>
      <div>
        <ul className="social-icons">
          {socialIcon.map((x, index) => (
            <li key={index}>
              <a href={x.url} target="_blank">
                <i className={x.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialIcon;
