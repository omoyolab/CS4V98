import React, { useState, useEffect } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./AppSearchBar.css";

const AppSearchBar = ({ placeholder, label, onSubmit }) => {
  const [keywords, setKeywords] = useState(null);

  useEffect(() => {
    const query = getQueryParamValue("q");
    if (!keywords && query && query !== "") {
      setKeywords(query);
    }
  }, []);

  const eventHandler = (e) => {
    if (!keywords || keywords === "") {
      return;
    }
    if (e.type == "click") {
      onSubmit(keywords);
    } else if (e.type == "keypress" && e.charCode === 13) {
      onSubmit(keywords);
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
    <div>
      <div className="p-inputgroup ">
        <InputText
          placeholder={placeholder}
          onChange={(e) => setKeywords(e.target.value)}
          onKeyPress={eventHandler}
          value={keywords}
        />
        <Button
          label={label}
          className="p-button-success search"
          onClick={eventHandler}
        />
      </div>
    </div>
  );
};
export default AppSearchBar;
