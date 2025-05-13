# Zerodha-like Clone

This project is a Zerodha-like Clone, built to simulate a stock trading and investment platform. It includes a frontend for user interaction, a backend for handling API requests, and a dashboard for managing user data and activities.

---

## Features

- User authentication (Signup/Login)
- Stock trading (Buy/Sell)
- Watchlist management
- SIP (Systematic Investment Plan) management
- Funds management (Add/Withdraw funds)

---

## Technologies Used

### Frontend

- React.js
- React Router
- Bootstrap
- Font Awesome

### Backend

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Axios

### Dashboard

- React.js
- React Router
- Material-UI

---

## Setup Instructions

### Prerequisites

- Node.js installed
- MongoDB instance running
- A `.env` file with the following variables:
  
```plaintext
    - `MONGO_URI`: MongoDB connection string
    - `JWT_SECRET`: Secret key for JWT authentication
    - `PORT`: Port number for the server (default: 5000)
    - `BASE_URL`: Base URL for the API (default: http://localhost:5000)
```

### Steps

1. Clone the repository:
   
 ```bash
 git clone https://github.com/rijughosh01/Zerodha
 cd Zerodha-Clone

2. Install dependencies for each folder:
   
 ```bash
cd backend
npm install
cd ../dashboard
npm install
cd ../frontend
npm install

## Frontend Overview

The frontend is located in the frontend/ directory and serves as the landing page for users. Key features include:

- Home Page: Overview of the platform and its features.
- Signup/Login: User authentication using Firebase.
- Pricing Page: Details about pricing and brokerage.
- Support Page: Help topics and ticket creation.
- About Page: Information about the company and team.

## Key Components

- Hero: Displays the main banner and call-to-action.
- Awards: Highlights achievements and accolades.
- Stats: Displays key statistics about the platform.
- Education: Provides links to educational resources like Varsity and TradingQ&A.
- Footer: Contains links to important pages and disclaimers.

## Dashboard Overview
The dashboard is located in the dashboard/ directory and provides a user interface for managing investments. Key components include:

- Watchlist: Add and monitor stocks.
- Holdings: View current investments and their performance.
- Orders: Manage buy/sell orders.
- Funds: Add or withdraw funds.
- SIP: Manage systematic investment plans.

## Backend Overview
The backend is located in the backend/ directory and handles API requests. Key endpoints include:

- /allHoldings: Fetch all holdings.
- /allPositions: Fetch all positions.
- /newOrder: Create a new buy/sell order.

The backend uses MongoDB for data storage and Mongoose for schema management.
```
### License

This project is for educational purposes only and is not affiliated with Zerodha. Use it at your own discretion.