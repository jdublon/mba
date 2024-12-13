# syntax=docker.io/docker/dockerfile:1
FROM node:22-alpine
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

COPY src ./src
COPY public ./public
COPY eslint.config.mjs .
COPY next.config.ts .
COPY postcss.config.js .
COPY tailwind.config.js .
COPY tsconfig.json .
COPY jest.config.ts .

# Start
CMD npm run dev