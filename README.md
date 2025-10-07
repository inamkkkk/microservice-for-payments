# Payments Microservice

A simple microservice for simulating payment processing using Stripe-like functionality.

## Features

*   Simulates payment processing.
*   Uses JWT for authentication (optional, can be disabled in config).
*   Includes basic validation.

## Technologies Used

*   Node.js
*   Express.js
*   jsonwebtoken (for authentication)
*   uuid (for transaction IDs)

## Installation

1.  Clone the repository:
    `git clone <repository_url>`
2.  Navigate to the project directory:
    `cd <project_directory>`
3.  Install dependencies:
    `npm install`

## Configuration

1.  Create a `.env` file in the root directory based on the `.env.example`.
2.  Configure the following variables:
    *   `PORT`: The port the server will listen on (default: 3000).
    *   `JWT_SECRET`: A secret key for signing JWTs.  If left empty, authentication will be disabled.

## Usage

1.  Start the server:
    `npm start`

## Endpoints

*   `POST /api/payments/process`: Processes a payment. Requires authentication if `JWT_SECRET` is configured.

## Authentication

*   Authentication is enabled if `JWT_SECRET` is defined in the `.env` file.
*   A valid JWT must be provided in the `Authorization` header as a Bearer token.

## Example Request


{
    "amount": 100,
    "currency": "USD",
    "token": "test_token" 
}


## Example Response


{
    "success": true,
    "message": "Payment processed successfully.",
    "transactionId": "<generated_uuid>"
}
