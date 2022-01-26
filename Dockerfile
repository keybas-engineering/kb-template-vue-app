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
COPY public ./public
COPY src ./src
RUN npm run build

# Package
# Based on https://cli.vuejs.org/guide/deployment.html#docker-nginx
FROM nginx:alpine
WORKDIR /app
COPY --from=build-env /app/dist /app
COPY --from=build-env /app/public /app/public
COPY deploy/entrypoint.sh /entrypoint.sh
COPY deploy/nginx.conf /etc/nginx/nginx.conf
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
