import React from "react";

const SIP = () => {
  const weeklySIPData = [
    {
      name: "Weekly SIPs",
      status: "ACTIVE",
      schedule: [
        "21st at 09:30 (in 3 days)",
        "28th at 09:30 (in 10 days)",
        "1st at 09:30 (in 11 days)",
        "7th at 09:30 (in 17 days)",
        "14th at 09:30 (in 24 days)",
      ],
      associatedBasket: "IT stocks",
      createdOn: "2022-10-24",
      monthsAgo: 28,
    },
  ];

  const monthlySIPData = [
    {
      name: "Monthly SIPs",
      status: "PAUSED",
      schedule: ["3rd at 09:30 (in 13 days)"],
      associatedBasket: "ETFs",
      createdOn: "2023-02-15",
      monthsAgo: 24,
    },
  ];

  return (
    <div className="sip-orders">
      <div className="topbar">
        <input type="text" placeholder="Search SIPs" className="search-bar" />
        <button className="new-sip">New SIP</button>
      </div>
      <h3>SIPs</h3>
      <div className="sip-columns">
        <div className="column">
          <h4>Weekly SIPs</h4>
          {weeklySIPData.map((sip, index) => (
            <div key={index}>
              <div>
                <strong>Name:</strong> {sip.name}
              </div>
              <div>
                <strong>Status:</strong>{" "}
                <span className={`status ${sip.status.toLowerCase()}`}>
                  {sip.status}
                </span>
              </div>
              <div>
                <strong>Schedule:</strong>{" "}
                {sip.schedule.map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
              <div>
                <strong>Associated Basket:</strong> {sip.associatedBasket}
              </div>
              <div>
                <strong>Created On:</strong> {sip.createdOn} ({sip.monthsAgo}{" "}
                months ago)
              </div>
            </div>
          ))}
        </div>
        <div className="column">
          <h4>Monthly SIPs</h4>
          {monthlySIPData.map((sip, index) => (
            <div key={index}>
              <div>
                <strong>Name:</strong> {sip.name}
              </div>
              <div>
                <strong>Status:</strong>{" "}
                <span className={`status ${sip.status.toLowerCase()}`}>
                  {sip.status}
                </span>
              </div>
              <div>
                <strong>Schedule:</strong>{" "}
                {sip.schedule.map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
              <div>
                <strong>Associated Basket:</strong> {sip.associatedBasket}
              </div>
              <div>
                <strong>Created On:</strong> {sip.createdOn} ({sip.monthsAgo}{" "}
                months ago)
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SIP;
