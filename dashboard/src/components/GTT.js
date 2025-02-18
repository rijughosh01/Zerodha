import React from 'react';

const GTT = () => {
  const gttOrders = [
    {
      createdOn: "2023-05-09",
      instrument: "PNB NSE",
      type: "OCO",
      action: "SELL",
      trigger: "47.80 (-3.04%), 52.85 (7.2%)",
      ltp: "49.30",
      quantity: "1 / 1",
      status: "ACTIVE"
    },
    {
      createdOn: "2023-05-04",
      instrument: "IDEA NSE",
      type: "SINGLE",
      action: "SELL",
      trigger: "6.65 (-5.67%)",
      ltp: "7.05",
      quantity: "1",
      status: "ACTIVE"
    },
    {
      createdOn: "2023-02-06",
      instrument: "ONGC BSE",
      type: "SINGLE",
      action: "SELL",
      trigger: "136.20 (-18.49%)",
      ltp: "167.10",
      quantity: "1",
      status: "ACTIVE"
    },
    {
      createdOn: "2023-05-09",
      instrument: "11th 23MAY 18300 CE NFO",
      type: "OCO",
      action: "SELL",
      trigger: "50.40, 51.45",
      ltp: "—",
      quantity: "50 / 50",
      status: "TRIGGERED"
    },
    {
      createdOn: "2023-05-09",
      instrument: "11th 23MAY 18300 CE NFO",
      type: "OCO",
      action: "BUY",
      trigger: "50.00, 51.05",
      ltp: "—",
      quantity: "50 / 50",
      status: "TRIGGERED"
    }
  ];

  return (
    <div className="gtt-orders">
      <h3>GTT Orders</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Created On</th>
            <th>Instrument</th>
            <th>Type</th>
            <th>Action</th>
            <th>Trigger</th>
            <th>LTP</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {gttOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.createdOn}</td>
              <td>{order.instrument}</td>
              <td>{order.type}</td>
              <td>{order.action}</td>
              <td>{order.trigger}</td>
              <td>{order.ltp}</td>
              <td>{order.quantity}</td>
              <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GTT;
