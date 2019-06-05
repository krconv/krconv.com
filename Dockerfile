FROM node:8

WORKDIR /app

# install dependencies
COPY package*.json /app
RUN npm install

# copy the project
COPY . /app

ENV PORT=80
EXPOSE $PORT

CMD ["npm", "start"]