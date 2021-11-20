import React from "react";

import "./AppContent.css";

const AppContent = ({ news, newsFrom, url, title, description }) => {
  return (
    <>
      <div className="searchContent">
        <div style={{ display: "flex" }}>
          <p className="news">{news}</p>
          <p className="newsFrom">{newsFrom}</p>
        </div>
        <h2>
          <a href={url} target="_blank">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default AppContent;
