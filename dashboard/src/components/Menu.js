import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Orders.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">PG</div>
          <p className="username">USERID</p>
        </div>
        {isProfileDropdownOpen && (
          <div className="popup-window open">
            <div className="popup-header">
              <strong>Pritam Ghosh</strong>
              <div className="popup-email">pg4009355@gmail.com</div>
            </div>
            <div className="popup-item">
              <i className="fas fa-user-cog"></i> My profile / Settings
            </div>
            <div className="popup-item">
              <i className="fas fa-tachometer-alt"></i> Console
            </div>
            <div className="popup-item">
              <i className="fas fa-coins"></i> Coin
            </div>
            <div className="popup-item">
              <i className="fas fa-headset"></i> Support
            </div>
            <div className="popup-item">
              <i className="fas fa-user-friends"></i> Invite friends
            </div>
            <div className="popup-item">
              <i className="fas fa-map-signs"></i> Tour Kite
            </div>
            <div className="popup-item">
              <i className="fas fa-keyboard"></i> Keyboard shortcuts
            </div>
            <div className="popup-item">
              <i className="fas fa-book"></i> User manual
            </div>
            <div className="popup-item">
              <i className="fas fa-sign-out-alt"></i> Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
