FROM node:23.11.1-slim AS builder

RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx squid-typeorm-codegen && \
    npx squid-evm-typegen /app/src/abi /app/abi/* && \
    npx tsc

FROM node:23.11.1-slim

RUN adduser --disabled-password --gecos "" indexer

WORKDIR /app

COPY --from=builder /app/lib /app/lib
COPY --from=builder /app/.env /app/.env
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package*.json /app/

USER indexer

LABEL maintainer="luka.golinar@origin-trail.com" \
      version="1.0" \
      description="Optimized Dockerfile for Squid indexer"

CMD ["sh", "-c", "npx squid-typeorm-migration generate && npx squid-typeorm-migration apply && node -r dotenv/config /app/lib/main.js"]
