FROM node:12.16.3

WORKDIR /var/www/code

ENV PORT 3000

COPY . /var/www/code/

RUN npm install

CMD ["node", "server.js"]