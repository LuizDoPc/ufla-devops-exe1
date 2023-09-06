FROM node:lts

WORKDIR /app

COPY app.js .
COPY package.json .

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]

