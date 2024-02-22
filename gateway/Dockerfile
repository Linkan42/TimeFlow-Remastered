FROM node:18

WORKDIR /gateway

COPY package*.json ./ 

RUN npm install

COPY . . 

CMD ["npm", "run", "start"]