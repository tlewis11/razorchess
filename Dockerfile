FROM node:carbon
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8081
CMD [ "npm", "start" ]
