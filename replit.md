# COVENANT.AI Enterprise v3.0

Constitutional AI Platform for enterprise-grade AI alignment and compliance monitoring.

## Architecture

- **Frontend**: Vite + React + TypeScript, running on port 5000
- **Backend**: FastAPI (Python), running on port 8000
- **Database**: PostgreSQL (Replit-managed)

## Project Structure

```
/
├── frontend/          # Vite + React frontend
│   ├── src/
│   │   ├── pages/    # Route pages (Dashboard, Evaluator, Compliance, Analytics, Settings)
│   │   ├── App.tsx   # React Router setup
│   │   └── main.tsx  # Entry point
│   ├── vite.config.ts # Vite config (port 5000, proxy /api -> :8000)
│   └── package.json
├── backend/           # FastAPI Python backend
│   └── src/covenant/
│       ├── main.py   # FastAPI app entry point
│       ├── api/      # Route handlers
│       ├── core/     # Constitutional engine
│       ├── db/       # Database session (SQLAlchemy async)
│       ├── utils/    # Config, logging
│       └── monitoring/ # Prometheus metrics
└── start.sh           # Startup script (runs both services)
```

## Running the App

The app is started via `start.sh` which:
1. Starts the FastAPI backend on port 8000 (background)
2. Starts the Vite dev server on port 5000 (foreground)

## Key Configuration

- Frontend proxies `/api` requests to `http://localhost:8000`
- Backend CORS is configured to allow all origins in development
- Database URL is read from `DATABASE_URL` env var (auto-converted to asyncpg format)
- Backend reads `SECRET_KEY` and `JWT_SECRET` from environment (defaults are insecure placeholders for dev only)

## Dependencies

### Frontend
- React 18, React Router v6, TanStack Query, Zustand, Recharts, Lucide React, Tailwind CSS

### Backend
- FastAPI, Uvicorn, SQLAlchemy (async), asyncpg, Pydantic v2, python-jose, passlib, prometheus_client, numpy, z3-solver

## Security Notes

- `SECRET_KEY` and `JWT_SECRET` should be set as environment secrets in production
- `TrustedHostMiddleware` is only applied in production mode (`APP_ENV=production`)
- CORS is open (`*`) in development — restrict in production via `CORS_ORIGINS` env var
