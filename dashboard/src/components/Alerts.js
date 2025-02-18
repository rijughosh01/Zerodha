import React from 'react';

const Alerts = () => {
  const alertsData = [
    {
      name: "Nifty 10% down from all time high",
      condition: "LastTradePrice(INDICES:NIFTY 50) < 17300",
      status: "ENABLED",
      triggered: 0,
      createdOn: "2023-04-05"
    },
    {
      name: "SBIN up - buy 100 qty",
      condition: "LastTradePrice(NSE:SBIN) >= 573.35",
      status: "DISABLED",
      triggered: 2,
      createdOn: "2023-05-09"
    },
    {
      name: "Buy at 50rs",
      condition: "LastTradePrice(NFO:NIFTY23MAY18300CE) < 50",
      status: "ENABLED",
      triggered: 0,
      createdOn: "2023-05-09"
    }
  ];

  return (
    <div className="alerts">
      <div className="topbar">
        <input type="text" placeholder="Search alerts" className="search-bar" />
        <button className="new-alert">New Alert</button>
      </div>
      <h3>Alerts ({alertsData.length})</h3>
      <div className="alerts-columns">
        <div className="column">
          <h4>Name & Condition</h4>
          {alertsData.map((alert, index) => (
            <div key={index} className="alert-item">
              <div>
                <input type="checkbox" className="alert-checkbox" />
                <span>{alert.name}</span>
              </div>
              <div className="condition">{alert.condition}</div>
              <div className={`status ${alert.status.toLowerCase()}`}>{alert.status}</div>
            </div>
          ))}
        </div>
        <div className="column">
          <h4>Triggered</h4>
          {alertsData.map((alert, index) => (
            <div key={index}>{alert.triggered}</div>
          ))}
        </div>
        <div className="column">
          <h4>Created On</h4>
          {alertsData.map((alert, index) => (
            <div key={index}>{alert.createdOn}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alerts;
