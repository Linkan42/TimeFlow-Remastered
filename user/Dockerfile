FROM node:18

WORKDIR /user

COPY package*.json ./ 

RUN npm install

COPY . . 

COPY .env .env

ARG PORT

ENV PORT=${PORT:-3000}

CMD ["npm", "run", "start"]