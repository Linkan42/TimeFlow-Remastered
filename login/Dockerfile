FROM node:18

WORKDIR /login

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3002

EXPOSE 3002

CMD ["npm", "start"]