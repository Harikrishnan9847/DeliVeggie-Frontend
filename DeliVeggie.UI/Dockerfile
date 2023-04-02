FROM node:16.13 AS builder
WORKDIR /src
COPY ["DeliVeggie.UI/.", "/DeliVeggie.UI/."]

WORKDIR /DeliVeggie.UI
RUN npm install
RUN npm run build --prod

FROM nginx:1.15.8-alpine
WORKDIR /src
COPY --from=builder /DeliVeggie.UI/dist/deli-veggie.ui /usr/share/nginx/html
COPY /DeliVeggie.UI/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8001