import React, { useEffect, useState } from "react";
import "primeflex/primeflex.css";
import AppContent from "../../components/AppContent";
import { Skeleton } from "primereact/skeleton";
import SearchPageNavbar from "../../layout/SearchPageNavbar";
import NewsActions from "../../api/NewsActions";
import { useHistory } from "react-router-dom";
import Footer from "../../layout/Footer";
import "./Search.css";

const Search = ({ onClickLogo }) => {
  const [news, setNews] = useState();
  const history = useHistory();

  const getAllNews = async (keyword) => {
    setNews(null);
    const response = await NewsActions.getAllNews(keyword);
    setNews(response);
  };

  useEffect(() => {
    const query = getQueryParamValue("q");

    if (query && query !== "") {
      getAllNews(query);
    } else {
      history.push("/");
    }
  }, []);

  const onSubmitHandler = (keywords) => {
    if (keywords) {
      history.push(`/search?q=${keywords}`);
      getAllNews(keywords);
    }
  };

  function convertQueryToObject(q) {
    if (!q) {
      return null;
    }

    var search = q;
    return JSON.parse(
      '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
      function (key, value) {
        return key === "" ? value : decodeURIComponent(value);
      }
    );
  }

  function getQueryParamValue(param) {
    const search = convertQueryToObject(window.location.search.substring(1));

    if (!search) {
      return null;
    }

    return search[param];
  }

  return (
    <>
      <div>
        <div className="container-fluid">
          <SearchPageNavbar
            onClickLogo={onClickLogo}
            onSubmit={onSubmitHandler}
          />
        </div>

        <hr className="hr" />

        <div className="searhResult">
          <p className="searchCounter">
            {news && "About " + news.length + " results"}{" "}
          </p>
          {news &&
            news.map((x, index) => (
              <AppContent
                url={x.url}
                news="News"
                key={index}
                newsFrom={x.source}
                title={x.title}
                description={x.source}
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
      </div>
      <Footer />
    </>
  );
};

export default Search;
