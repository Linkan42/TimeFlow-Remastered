FROM node:18

WORKDIR /meeting

COPY package*.json ./

RUN npm install

COPY . . 

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]