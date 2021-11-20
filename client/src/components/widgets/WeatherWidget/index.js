import React, { useEffect } from "react";

const WeatherWidget = () => {
  useEffect(() => {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = "https://weatherwidget.io/js/widget.min.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "weatherwidget-io-js");
  }, []);

  return (
    <>
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/6d523d38/lagos/"
        data-label_1="Lagos"
        data-label_2="Weather"
        data-font="Roboto"
        data-icons="Climacons Animated"
        data-mode="Forecast"
        data-days="3"
        data-theme="pure"
      >
        NIGERIA WEATHER
      </a>
    </>
  );
};

export default WeatherWidget;
