#!/bin/bash
set -e

INDEXER_DATABASES=(
  "nw-testnet-db"
  "base-testnet-db"
  "gnosis-testnet-db"
  "nw-mainnet-db"
  "gnosis-mainnet-db"
  "base-mainnet-db"
)

for DB in "${INDEXER_DATABASES[@]}"; do
  echo "Checking database $DB..."
  DB_EXIST=$(psql -U "$POSTGRES_USER" -d postgres -tAc "SELECT 1 FROM pg_database WHERE datname='$DB'")
  if [ "$DB_EXIST" != "1" ]; then
    echo "Creating database $DB..."
    createdb -U "$POSTGRES_USER" "$DB"
  else
    echo "Database $DB already exists, skipping..."
  fi
done