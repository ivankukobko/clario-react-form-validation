FROM node:alpine
RUN apk add --update --no-cache \
  yarn

RUN mkdir -p /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn add create-react-app
CMD ["exec", "\"$@\""]
