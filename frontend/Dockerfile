FROM node:14.18.3

WORKDIR '/app'

COPY package*.json ./
RUN npm install -qyg nodemon@2.0.7
RUN npm install -qy
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf ./etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html