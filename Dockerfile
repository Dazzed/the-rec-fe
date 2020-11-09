FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install app dependencies
RUN yarn install

# Build app
RUN yarn build

EXPOSE 4000
CMD ["yarn", "start" ]
