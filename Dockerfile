FROM node:23-slim

WORKDIR /app

COPY . /app/
RUN npm install

RUN npx squid-typeorm-codegen
RUN npx squid-evm-typegen /app/src/abi /app/abi/*

RUN npx tsc

RUN ls /app/lib

CMD ["sh", "-c", "npx squid-typeorm-codegen && npx squid-typeorm-migration generate; npx squid-typeorm-migration apply && node -r dotenv/config /app/lib/main.js"]
