import React, { useState, useEffect } from "react";
import SocialIcon from "../../components/SocialIcon";
import TermsPolicy from "../../components/TermsPolicy";
import { Skeleton } from "primereact/skeleton";
import moment from "moment";
import FrontPageNews from "../../components/FrontPageNews";
import NewsActions from "../../api/NewsActions";
import WeatherWidget from "../../components/widgets/WeatherWidget";

import "./Politics.css";

const Politics = () => {
  const [news, setNews] = useState();
  const getAllPoliticsNews = async () => {
    setNews(null);
    const response = await NewsActions.getAllPoliticsNews();
    setNews(response);
  };

  useEffect(() => {
    getAllPoliticsNews();
    window.onscroll = () => {
      if (window.pageYOffset > 1840) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    var header = document.getElementById("sticky-footer");
    var sticky = header.offsetTop;
  }, []);

  return (
    <div className="news-section">
      <div className="news-area">
        <h1 className="category_headline">Latest Political Headlines</h1>
        {news &&
          news.map((x, index) => (
            <FrontPageNews
              web={x.url}
              key={index}
              heading={x.title}
              time={moment().startOf("hour").fromNow()}
              newsImage={x.img}
              news="Politics"
              newsFrom={x.source}
            />
          ))}
        {!news &&
          [...Array(14)].map((index) => (
            <Skeleton
              key={`skeleton-${index}`}
              height="3rem"
              borderRadius="5px"
              className="p-mb-1 p-mt-2"
            />
          ))}
      </div>
      <div className="sidebar">
        <WeatherWidget />
        <div id="sticky-footer">
          <SocialIcon />
          <TermsPolicy />
        </div>
      </div>
    </div>
  );
};
export default Politics;
