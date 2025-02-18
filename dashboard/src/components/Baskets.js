import React from 'react';

const Baskets = () => {
  const basketsData = [
    {
      name: "Bull call spread",
      items: 2,
      createdOn: "2021-09-24"
    },
    {
      name: "Calender spread",
      items: 2,
      createdOn: "2023-05-08"
    },
    {
      name: "Butterfly Spread",
      items: 3,
      createdOn: "2023-05-08"
    },
    {
      name: "IT stocks",
      items: 4,
      createdOn: "2023-05-08"
    },
    {
      name: "ETFs",
      items: 4,
      createdOn: "2023-05-08"
    }
  ];

  return (
    <div className="baskets">
      <div className="topbar">
        <button className="new-basket">New basket</button>
        <input type="text" placeholder="Search baskets" className="search-bar" />
      </div>
      <h3>Baskets (5)</h3>
      <table className="baskets-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Items</th>
            <th>Created on</th>
          </tr>
        </thead>
        <tbody>
          {basketsData.map((basket, index) => (
            <tr key={index}>
              <td>{basket.name}</td>
              <td>{basket.items}</td>
              <td>{basket.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Baskets;
