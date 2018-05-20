FROM node:carbon
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
CMD node index.js

