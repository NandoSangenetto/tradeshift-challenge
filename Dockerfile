FROM node:latest

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY . .
RUN npm i && npm run build

CMD node src/server/index.js
