# Development
FROM node:21-alpine AS dev
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

# Production
FROM node:21-alpine AS prod
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
CMD ["npm", "run", "prod"]