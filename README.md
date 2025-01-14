# Job Board API

A RESTful API for managing job postings, built with Node.js, Express, TypeScript, and MySQL.

## Features
- User authentication with JWT.
- CRUD operations for job postings.
- Pagination for retrieving job listings.
- Swagger documentation for API endpoints.

## Setup and Running Instructions

### Prerequisites
- **Node.js 18 or higher** installed.
- Docker and Docker Compose installed (optional, for containerized setup).

### Steps to Run the Project

#### Using Docker (Recommended)
1. Clone the repository:
   ```bash
   git clone https://github.com/MominMuzammil513/Job-Board-API
   cd job-board-api

## Setup
1. Clone the repo.
2. Run `npm install`.
3. Set up MySQL and create the database.
4. Add environment variables in `.env`.
5. Run `npm run dev` to start the server.

## API Endpoints
- POST http://localhost:3001/auth/login
- POST http://localhost:3001/api/jobs
- GET http://localhost:3001/api/jobs
- GET http://localhost:3001/api/jobs/:id
- PUT http://localhost:3001/api/jobs/:id
- DELETE http://localhost:3001/api/jobs/:id