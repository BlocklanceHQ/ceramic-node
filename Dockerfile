FROM node:20.10
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn
COPY run.mjs ./

EXPOSE 7007

CMD ["npm", "run", "start"]
