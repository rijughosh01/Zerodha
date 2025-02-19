import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import axios from "axios";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDashboardRunning, setIsDashboardRunning] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const checkDashboardStatus = async () => {
      try {
        await axios.get("https://my-dashboard-eight-wine.vercel.app/");
        setIsDashboardRunning(true);
      } catch (error) {
        setIsDashboardRunning(false);
      }
    };

    checkDashboardStatus();
    const intervalId = setInterval(checkDashboardStatus, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              {isDashboardRunning && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <span
                    className="nav-link active"
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </span>
                </li>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
