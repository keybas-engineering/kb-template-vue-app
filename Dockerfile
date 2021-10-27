# Prepare
FROM node:16-bullseye-slim AS build-env
WORKDIR /app
COPY .npmrc ./
COPY tsconfig.json ./
COPY vue.config.js ./
COPY babel.config.js ./
COPY .eslintrc.js ./
COPY .eslintignore ./
COPY .browserslistrc ./
COPY package*.json ./
RUN npm ci

# Build
COPY src ./src
RUN npm run build

# Package
# Based on https://cli.vuejs.org/guide/deployment.html#docker-nginx
FROM nginx
WORKDIR /app
COPY --from=build-env /app/dist /app
COPY deploy/nginx.conf /etc/nginx/nginx.conf
