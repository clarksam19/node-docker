FROM node

WORKDIR /usr/local

COPY ./src/package*.json ./

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
         then npm install && npm cache clean -f; \
         else npm install --only=prod && npm cache clean -f; \
         fi

WORKDIR /usr/local/app

COPY ./src ./app

CMD ["npm", "start"]
