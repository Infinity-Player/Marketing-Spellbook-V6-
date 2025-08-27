# Run & Test (local)

## Prerequisites
- Node.js >=18, npm
- Docker & Docker Compose (optional for container mode)
- Redis & Postgres (optional, docker-compose will provide them)

## Windows PowerShell (example)
1. Copy .env.example to .env and set variables.
2. Install:
   cd backend
   npm ci
   cd ../frontend
   npm ci
3. Migrate DB:
   cd ../backend
   node migrate.js
4. Start dev servers (two terminals):
   cd backend
   npm run dev
   cd ../frontend
   npm run dev

## macOS / Linux (bash)
Same as above using bash.

## Docker Compose
docker-compose up --build

## Tests
cd backend
npm test

## Notes
- Seeds: backend seeds a dev user (dev@local.test / Password123!) at startup if DB is empty.
- For Google/OpenAI integration, populate env vars in .env. See backend/README.md for details.
