# Backend README

## Run locally
1. copy .env.example -> .env and edit
2. npm ci
3. node migrate.js
4. npm run dev

## Env vars
- JWT_SECRET (required)
- PORT (default 4000)
- POSTGRES_URL or DATABASE_URL (sqlite fallback)
- REDIS_URL

## Notes
- This scaffold uses a simple file-based dev store in `backend/data/` for seeds and shares.
- Replace with Postgres + Knex migrations in production. See knexfile.template for guidance.
