# Deployment Plan

## Option 1: Vercel + Render
- Frontend: Deploy `frontend` on Vercel (build instructions: `npm run build`, set NODE_ENV=production)
- Backend: Deploy `backend` on Render (Dockerfile provided), set env vars (JWT_SECRET, POSTGRES_URL, REDIS_URL)

## Option 2: Docker Compose on VPS
- Provision a VPS with docker & docker-compose.
- Clone repo, create .env, run `docker-compose up -d --build`.
- Use nginx reverse proxy and Certbot for Let's Encrypt SSL. Example nginx config in docs folder.

## Notes
- Use managed Postgres & Redis in production or provision behind backups.
- Secure JWT_SECRET and other API keys using secret manager.
