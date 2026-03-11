# COVENANT NEXUS v8.0 — Constitutional Quantum Ethical Superintelligence

Merged platform: COVENANT.AI Enterprise v3.0 backend + COVENANT NEXUS v8.0 multi-agent Claude evaluation engine.

## Architecture

- **Frontend**: Vite + React + TypeScript — port 5000 (dark theme, sidebar nav)
- **Backend**: FastAPI (Python) — port 8000
- **Database**: PostgreSQL (Replit-managed, async via asyncpg)
- **AI Engine**: 4 parallel Claude Sonnet 4 agents (requires ANTHROPIC_API_KEY)

## Project Structure

```
/
├── frontend/src/
│   ├── components/Layout.tsx    # Sidebar nav layout
│   ├── pages/Dashboard.tsx      # Agent status, axiom overview, live API status
│   ├── pages/Evaluator.tsx      # 4-agent quantum evaluation (HTTP + WebSocket modes)
│   ├── pages/Compliance.tsx     # 5 axioms with implications and verdict protocol
│   ├── pages/Analytics.tsx      # Metrics: verdict distribution, axiom radar, agent perf
│   └── pages/Settings.tsx       # Engine config, API key status, security info
├── backend/src/covenant/
│   ├── main.py                  # FastAPI app — mounts all routers
│   ├── api/nexus_routes.py      # NEXUS v8: QuantumEthicalEngine, 4 agents, WebSocket
│   ├── api/routes.py            # Core evaluation routes
│   ├── api/auth_routes.py       # JWT authentication
│   ├── api/enterprise_routes.py # Enterprise constraint bundles
│   ├── api/admin_routes.py      # Admin / health
│   ├── core/constitutional_engine.py  # v3 constitutional engine (z3-solver)
│   ├── db/session.py            # SQLAlchemy async engine
│   └── utils/config.py          # Pydantic settings (reads env vars)
└── start.sh                     # Starts backend (:8000) then frontend (:5000)
```

## Key API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/quantum_evaluate` | 4-agent Claude evaluation (NEXUS v8) |
| WS | `/api/ws/evaluate` | Real-time streaming agent results |
| GET | `/api/axioms` | 5 constitutional axioms |
| GET | `/api/agents` | Agent list + live/demo status |
| GET | `/health` | Backend health check |
| POST | `/api/v1/evaluate` | v3 constitutional engine evaluation |
| GET | `/api/docs` | Swagger UI |

## Constitutional Axioms (Inviolable)

1. **Observer Rights** — No action may remove an observer's ability to observe or act
2. **Reversibility** — Prefer reversible actions; irreversible = max scrutiny
3. **Transparency** — All reasoning must be fully explainable and auditable
4. **Non-Domination** — No entity may gain disproportionate systemic control
5. **Truth Preservation** — Never create, amplify, or propagate false information

## Agent Architecture (NEXUS v8)

- **Observer Protector** — Guards observer autonomy across all futures
- **Quantum Risk Matrix** — Assesses systemic/cascading risks (10,000 futures)
- **Constitutional Engine** — Scores against all 5 axioms with numerical output
- **Strategic Nexus** — Synthesizes agent outputs into final verdict

## Verdict Protocol

- `EXECUTE` — All agents pass, safe across >95% of futures
- `REVIEW` — One or more agents flag concerns, human oversight needed
- `BLOCK` — Constitutional violation detected, must not proceed

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | For live AI | Enables real Claude Sonnet 4 evaluation |
| `DATABASE_URL` | Auto-set | PostgreSQL URL (auto-converted to asyncpg) |
| `SECRET_KEY` | Production | JWT signing key |
| `JWT_SECRET` | Production | JWT secret |

## Modes

- **Demo mode** (no ANTHROPIC_API_KEY): Returns deterministic mock responses instantly
- **Live mode** (with ANTHROPIC_API_KEY): Calls 4 Claude Sonnet 4 agents in parallel (~800ms)

## Security Notes

- Constitutional axioms are hardcoded — no override codes exist
- CORS open in development (`*`) — restrict via `CORS_ORIGINS` in production
- `TrustedHostMiddleware` only applies when `APP_ENV=production`
- Set `SECRET_KEY` and `JWT_SECRET` as env secrets for production deployments
