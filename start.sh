#!/bin/bash

echo "Starting COVENANT.AI Enterprise + NEXUS v8.0..."

# Kill any previous instances on our ports so restarts are clean
fuser -k 8000/tcp 2>/dev/null || true
fuser -k 5000/tcp 2>/dev/null || true
sleep 1

# Start backend in background (run from src dir so the covenant package is found)
cd /home/runner/workspace/backend/src
uvicorn covenant.main:app --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!
echo "Backend started (PID $BACKEND_PID) on :8000"

# Start frontend (Vite dev server on port 5000)
cd /home/runner/workspace/frontend
npm run dev
