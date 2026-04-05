## Products Management App (Backend)

REST API for product management, handling data persistence, validation, and business logic.

## Tech Stack

- Backend: Node.js / Express
- Database: PostgreSQL
- ORM/ODM: Sequelize
- Testing: Jest / Supertest
- Tools: DBeaver

## Features

- REST API development with Express
- CRUD operations using Sequelize and PostgreSQL
- Request validation using Express Validator
- Middleware-based architecture
- Unit and integration testing with Jest and Supertest

## Project Structure

```
/src → Application source code
/router.ts → API routes
/models → Database models (Sequelize)
/middlewares → Custom middlewares
/__tests__ → Testing suite (Jest / Supertest)
```

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/luisbalcazar/rest_api_node_ts_server_testing.git

# Install dependencies
npm install

# Run project
npm run dev
```

## Technical Highlights

- Implementation of RESTful API with Express
- Database integration using Sequelize ORM
- Input validation and middleware handling
- Endpoint testing with Jest and Supertest

## Future Improvements

- Add authentication and authorization
- Improve error handling and logging
- Add API documentation (Swagger)
