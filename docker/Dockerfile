FROM node:14.15

WORKDIR /usr/src/app

COPY ./package.json . 

RUN npm install

COPY . .

CMD ["yarn", "dev"]