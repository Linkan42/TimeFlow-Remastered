FROM node:18

WORKDIR /gateway

COPY package*.json ./ 

RUN npm install

COPY . . 

COPY .env .env

ARG PORT

ENV PORT=${PORT:-4001}

CMD ["npm", "run", "start"]