#!/usr/bin/env bash

docker compose -f docker-compose.db.yml up --force-recreate -d && \
npx tsc && node -r dotenv/config lib/main.js
