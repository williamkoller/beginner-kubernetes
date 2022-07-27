FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json index.mjs /app/

EXPOSE 3004

ENTRYPOINT [ "node", "index.mjs" ]