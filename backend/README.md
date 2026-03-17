# Compass Life Path Backend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up PostgreSQL and update `.env` with your database credentials.
3. Create a `users` table:
   ```sql
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     email VARCHAR(255) UNIQUE NOT NULL,
     password VARCHAR(255) NOT NULL
   );
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## Endpoints

- `POST /api/signup` — Signup with email and password
- `POST /api/login` — Login with email and password
- `POST /api/recommendations` — Get career recommendations
- `GET /api/health` — Health check

## Notes
- Passwords are stored as plain text for demo purposes. Use hashing in production.
- Recommendation logic is in `services/recommendationService.js`.
