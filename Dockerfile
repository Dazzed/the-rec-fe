FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install app dependencies
RUN yarn install

# Build app
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
