FROM node:10-alpine

COPY . /opt/

WORKDIR /opt

RUN npm install

EXPOSE 9090

ENTRYPOINT ["node", "server.js"]
