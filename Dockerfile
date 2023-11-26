FROM node:20.10
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY run.mjs ./

EXPOSE 7007

CMD ["npm", "run", "start"]
