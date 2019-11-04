FROM node:10-alpine as dev
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i
RUN npm i -g nodemon
COPY . ./
CMD npm run dev

FROM dev as prod
CMD npm run prod
