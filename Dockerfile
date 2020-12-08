FROM node:14-alpine

# App env
ARG NODE_ENV=staging
ENV NODE_ENV ${NODE_ENV}
ENV NEXT_PUBLIC_API_ENV ${NODE_ENV}

# Server port
ARG PORT=4000
ENV PORT ${PORT}
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
