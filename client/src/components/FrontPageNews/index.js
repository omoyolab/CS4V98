import React from "react";
import newsImage from "../../assets/images/news.PNG";
import NewsImage from "../../assets/images/empty.jpg";
import NewsImageSm from "../../assets/images/empty-sm.jpg";
import "./FrontPageNews.css";

const FrontPageNews = ({ web, heading, time, news, newsFrom, newsImage }) => {
  return (
    <>
      <div className="newsContent">
        {!newsImage && (
          <picture>
            <source media="(max-width:920px)" srcSet={NewsImageSm} />
            <img src={NewsImage} />
          </picture>
        )}
        {newsImage && <img src={newsImage} />}

        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="news">{news}</p>

            <p className="newsFrom">{newsFrom}</p>
          </div>
          <h2>
            <a href={web} target="_blank">
              {heading}
            </a>
          </h2>
          <p>{time}</p>
        </div>
      </div>
    </>
  );
};

export default FrontPageNews;
