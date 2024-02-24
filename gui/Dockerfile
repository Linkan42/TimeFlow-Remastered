FROM node:18

WORKDIR /gui

COPY package*.json ./ 

RUN npm install

COPY . . 

COPY .env .env

CMD ["npm", "run", "start"]