#!/usr/bin/env bash

docker stop sqd-indexer-postgres-1
docker rm sqd-indexer-postgres-1
docker volume rm sqd-indexer_postgres_data
rm -rf db
docker compose -f docker-compose.db.yml up -d

sleep 1

npx squid-typeorm-codegen
npx squid-typeorm-migration generate
npx squid-typeorm-migration-apply
