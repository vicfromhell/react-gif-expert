FROM node:20

WORKDIR /app

COPY . /app/

RUN yarn install

RUN yarn build
CMD [ "yarn","dev" ]