# Marketing Spellbook Ultimate v6

Production-capable full-stack scaffold (minimal implementation) including:
- Frontend: Next.js (app router) + TypeScript + TailwindCSS
- Backend: Express + Node.js (plain JS) with JWT auth scaffold
- DB: Knex migrations (Postgres / SQLite fallback)
- Queue: BullMQ + Redis scaffold
- Socket.IO realtime scaffold
- Docker Compose for local dev
- Tests (Jest) for CSV parser and share encode/decode
- Scripts to install, start, migrate, package zip

This repo is a scaffold implementing the full feature list required. See `/run-and-test.md` for exact run instructions.

IMPORTANT: The repository history was rewritten to remove tracked `node_modules` directories and large files.
Please see `HISTORY_REWRITE.md` for exact commands collaborators must run to resync local clones.
