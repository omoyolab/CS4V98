import React, { useEffect } from "react";

import './LiveScoresWidget.css';

const LiveScoresWidget = () => {
  return (
    <>
      <div className="livescoreSection">
        <h3>Livescores</h3>
        <div className="competition">
          <select>
            <option value="qatar2022q">Qatar 2022 WC Qualifiers</option>
            <option value="npl">Nigeria Premier League</option>
            <option value="afcon2023q">AFCON 2023 Qualifiers</option>
            <option value="afcon2023">AFCON 2023</option>
          </select>
        </div>
        <div className="resultsSection">
          <p className="matches">Liberia 0 - 2 Super Eagles 11/3</p>
          <p className="matches"> Super Eagles 1 - 1 Cape Verde 11/16</p>
        </div>
      </div>
    </>
  );
};

export default LiveScoresWidget;
