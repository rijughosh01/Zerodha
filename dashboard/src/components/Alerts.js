import React from "react";

const Alerts = () => {
  const alertsData = [
    {
      name: "Nifty 10% down from all time high",
      condition: "LastTradePrice(INDICES:NIFTY 50) < 17300",
      status: "ENABLED",
      triggered: 0,
      createdOn: "2023-04-05",
    },
    {
      name: "SBIN up - buy 100 qty",
      condition: "LastTradePrice(NSE:SBIN) >= 573.35",
      status: "DISABLED",
      triggered: 2,
      createdOn: "2023-05-09",
    },
    {
      name: "Sell RELIANCE above 2500",
      condition: "LastTradePrice(NSE:RELIANCE) > 2500",
      status: "ENABLED",
      triggered: 1,
      createdOn: "2023-06-10",
    },
    {
      name: "TCS drops below 3000",
      condition: "LastTradePrice(NSE:TCS) < 3000",
      status: "DISABLED",
      triggered: 0,
      createdOn: "2023-07-15",
    },
    {
      name: "ITC crosses 300",
      condition: "LastTradePrice(NSE:ITC) > 300",
      status: "ENABLED",
      triggered: 2,
      createdOn: "2023-09-25",
    },
    {
      name: "M&M above 800",
      condition: "LastTradePrice(NSE:M&M) > 800",
      status: "ENABLED",
      triggered: 1,
      createdOn: "2023-11-05",
    },
    {
      name: "Buy Wipro at 600",
      condition: "LastTradePrice(NSE:WIPRO) = 600",
      status: "ENABLED",
      triggered: 0,
      createdOn: "2024-03-25",
    },
    {
      name: "Infosys above 2000",
      condition: "LastTradePrice(NSE:INFOSYS) > 2000",
      status: "ENABLED",
      triggered: 1,
      createdOn: "2024-04-30",
    },
    {
      name: "Sell ONGC below 100",
      condition: "LastTradePrice(NSE:ONGC) < 100",
      status: "DISABLED",
      triggered: 0,
      createdOn: "2024-05-05",
    },
    {
      name: "BPCL crosses 400",
      condition: "LastTradePrice(NSE:BPCL) > 400",
      status: "ENABLED",
      triggered: 2,
      createdOn: "2024-06-10",
    },
    {
      name: "Sell HCLTECH below 900",
      condition: "LastTradePrice(NSE:HCLTECH) < 900",
      status: "DISABLED",
      triggered: 0,
      createdOn: "2024-07-15",
    },
    {
      name: "Buy TataSteel at 1200",
      condition: "LastTradePrice(NSE:TATASTEEL) = 1200",
      status: "ENABLED",
      triggered: 0,
      createdOn: "2024-08-20",
    },
    {
      name: "AxisBank above 800",
      condition: "LastTradePrice(NSE:AXISBANK) > 800",
      status: "ENABLED",
      triggered: 1,
      createdOn: "2024-09-25",
    },
  ];

  return (
    <div className="alerts">
      <div className="topbar">
        <input type="text" placeholder="Search alerts" className="search-bar" />
        <button className="new-alert">New Alert</button>
      </div>
      <h3>Alerts ({alertsData.length})</h3>
      <div className="alerts-table-header">
        <div className="header-item">Name</div>
        <div className="header-item">Status</div>
        <div className="header-item">Triggered</div>
        <div className="header-item">Created On</div>
      </div>
      <div className="alerts-table">
        {alertsData.map((alert, index) => (
          <div key={index} className="alert-row">
            <div className="alert-item">
              <input type="checkbox" className="alert-checkbox" />
              <span>{alert.name}</span>
              <div className="condition">{alert.condition}</div>
            </div>
            <div className={`alert-item status ${alert.status.toLowerCase()}`}>
              {alert.status}
            </div>
            <div className="alert-item">{alert.triggered}</div>
            <div className="alert-item">{alert.createdOn}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
