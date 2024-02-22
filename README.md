# Calendar event management system

## Overview
This project aims to provide a comprehensive solution for managing calendar events. It consists of both a backend API developed with Nest.js and a frontend application built with Next.js. The backend manages data storage, retrieval, and processing of calendar events, while the frontend provides a user-friendly interface for interacting with the system.

## Design Architecture
The system follows a client-server architecture where the frontend interacts with the backend API to perform CRUD (Create, Read, Update, Delete) operations on calendar events. It utilizes PostgreSQL as the database for persistent data storage. Additionally, it employs Cron Jobs for sending notifications to users before the start of their events.

### Backend
Framework: Nest.js
Language: TypeScript
Database: PostgreSQL (hosted on elephantsql.com)
API Testing: Postman
Notifications: Cron Jobs for sending notifications

### Frontend
Framework: Next.js
Language: TypeScript

## Installation

### 1. Backend

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies: `npm install`

#### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the necessary environment variables following the provided template in `.env.example`.
3. Run `yarn mg:up` to  run migrations

#### Usage

1. Build the project: `npm run build`
2. Start the project: `npm run start`
3. The project will be running at `http://localhost:3000` by default. You can access it in your browser.
4. Access the API documentation at `https://documenter.getpostman.com/view/7896471/2sA2rAzi3f` to see the available endpoints and their descriptions.

#### Testing

1. Run tests: `npm run test`

#### Notification

1. You can see the notification msg on console log 30mins before start event.


### 2. Front-End

1. Clone the repository.
2. Install dependencies using `npm install`.
3. If you don't have nextjs installed, install it using `npm install next`.
4. If you don't have typescript installed, install it using `npm install typescript`.

#### Usage
1. Before running the frontend project please make sure the start the API Server
2. Start the development server by running `npm run dev`.
3. Access the application in your browser at `http://localhost:3000`.


