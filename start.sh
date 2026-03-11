#!/bin/bash
set -e

echo "Starting COVENANT.AI Enterprise..."

# Start backend in background (run from src dir so covenant package is found)
cd /home/runner/workspace/backend/src
uvicorn covenant.main:app --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!
echo "Backend started (PID $BACKEND_PID)"

# Start frontend
cd /home/runner/workspace/frontend
npm run dev
