import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="">
          <div className="row mt-5">
            <div className="col-4 p-3">
              <img
                src="media/images/smallcaseLogo.png"
                style={{ width: "150px", height: "auto" }}
              />
              <p className="text-small text-muted">
                Thematic investment platform
              </p>
            </div>
            <div className="col-4 p-3">
              <img
                src="media/images/streakLogo.png"
                style={{ width: "150px", height: "auto" }}
              />
              <p className="text-small text-muted">
                Thematic investment platform
              </p>
            </div>
            <div className="col-4 p-3">
              <img
                src="media/images/sensibullLogo.svg"
                style={{ width: "150px", height: "auto" }}
              />
              <p className="text-small text-muted">
                Thematic investment platform
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-4 p-3">
              <img
                src="media/images/zerodhaFundhouse.png"
                style={{ width: "150px", height: "auto" }}
              />
              <p className="text-small text-muted">
                Thematic investment platform
              </p>
            </div>
            <div className="col-4 p-3">
              <img
                src="media/images/goldenpiLogo.png"
                style={{ width: "150px", height: "auto" }}
              />
              <p className="text-small text-muted">
                Thematic investment platform
              </p>
            </div>
            <div className="col-4 p-3">
              <img
                src="media/images/dittoLogo.png"
                style={{ width: "150px", height: "auto" }}
              />
              <p className="text-small text-muted">
                Thematic investment platform
              </p>
            </div>
          </div>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleSignupClick}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
