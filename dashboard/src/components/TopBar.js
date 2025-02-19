import React from "react";
import Menu from "./Menu";
import "./BuyActionWindow.css";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
        <div className="nifty-it">
          <p className="index">NIFTY IT</p>
          <p className="index-points">{200.4}</p>
          <p className="percent"></p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{300.6}</p>
          <p className="percent"></p>
        </div>
        <div className="sensex-auto">
          <p className="index">SENSEX AUTO</p>
          <p className="index-points">{350.8}</p>
          <p className="percent"></p>
        </div>
        <div className="sensex-energy">
          <p className="index">SENSEX ENERGY</p>
          <p className="index-points">{400.9}</p>
          <p className="percent"></p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
