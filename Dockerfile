FROM node:18

WORKDIR /src

COPY package*.json ./
RUN npm install -g supervisor && npm install || true

COPY . .

EXPOSE 3000

CMD ["supervisor", "index.js"]
