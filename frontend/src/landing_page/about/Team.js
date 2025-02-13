import React from "react";

function Team() {
  return (
    <div className="container bg-light p-5 mt-5 border-top">
      <div className="row p-3 mt-3">
        <h1 className="text-center display-4">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-md-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "50%", width: "200px", height: "200px", objectFit: "cover" }}
            alt="Nithin Kamath"
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6 className="text-primary">Founder, CEO</h6>
        </div>
        <div className="col-md-6 p-3">
          <p className="lead">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <a href="" style={{ textDecoration: "none", color: "#007bff" }}> Homepage</a> /
            <a href="" style={{ textDecoration: "none", color: "#007bff" }}> TradingQnA</a> /
            <a href="" style={{ textDecoration: "none", color: "#007bff" }}> Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
