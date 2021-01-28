FROM node:12-alpine as builder
WORKDIR /client
COPY package.json /client/package.json
RUN cd client && npm install && npm run build
COPY . /client
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=builder /client/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
