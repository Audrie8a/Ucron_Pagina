FROM node:alpine AS build

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#2nd step

FROM nginx

COPY --from=build /app/dist/client /static
COPY /nginx.conf	/etc/nginx/nginx.conf

CMD ["/bin/sh",  "-c",  "envsubst < /static/assets/env.template.js > /static/assets/env.js && exec nginx -g 'daemon off;'"]