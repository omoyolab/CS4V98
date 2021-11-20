import React, { useState, useEffect } from "react";

import { Skeleton } from "primereact/skeleton";
import moment from "moment";
import FrontPageNews from "../../components/FrontPageNews";
import NewsActions from "../../api/NewsActions";
import BannerWidget from "../../components/widgets/BannerWidget";
import "./News.css";

const News = () => {
  const [news, setNews] = useState();
  const getAllNews = async () => {
    setNews(null);
    const response = await NewsActions.getAllNews();
    setNews(response);
  };

  useEffect(() => {
    getAllNews();
  }, []);
  return (
    <div className="news-section">
      <div className="news-area">
        <h1 className="category_headline">Latest News Headlines</h1>
        {news &&
          news.map((x, index) => (
            <FrontPageNews
              web={x.url}
              key={index}
              heading={x.title}
              time={moment().startOf("hour").fromNow()}
              newsImage={x.img}
              news="News"
              newsFrom={x.source}
            />
          ))}
        {!news &&
          [...Array(14)].map((index) => (
            <Skeleton
              key={index}
              height="3rem"
              borderRadius="5px"
              className="p-mb-1 p-mt-2"
            />
          ))}
      </div>
      <div className="sidebar">
        <BannerWidget />
      </div>
    </div>
  );
};
export default News;
