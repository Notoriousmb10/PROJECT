# Vite Project

This project is a SIM card management system built with a Vite frontend and a Node.js backend. The system allows users to activate, deactivate, and get details of SIM cards.



## Prerequisites

- Node.js
- MongoDB

## Backend

1. Navigate to the `Backend` directory:
   
   cd Backend

2. Install the dependencies:

    npm install

3. Start the MongoDB server:

    npm start

4. Navigate to the Frontend directory:
    cd Frontend
    npm install
    npm run dev

    Open your browser and navigate to http://localhost:5173.
Use the interface to activate, deactivate, and get details of SIM cards.


API Endpoints
Activate SIM Card
URL: /api/activate
Method: POST
Request Body: { "simNumber": "1234567890", "phoneNumber": "9876543210" }

Deactivate SIM Card
URL: /api/deactivate
Method: POST
Body:  { "simNumber": "1234567890" }

Get SIM Details
URL: /api/sim-details/:simNumber
Method: GET