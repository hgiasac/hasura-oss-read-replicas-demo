FROM node:12-alpine as build
WORKDIR /app
COPY package.json package-lock.json tsconfig.json ./
RUN npm install --silent
COPY src/. ./src
COPY public/. ./public

CMD ["npm", "start"]
