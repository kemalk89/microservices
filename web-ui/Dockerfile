FROM node:18.12.0-buster-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node server.js ./server.js

COPY --chown=node:node index.ejs ./index.ejs

USER node

ENTRYPOINT ["npm", "start"]