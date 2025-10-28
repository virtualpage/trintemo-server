FROM node:21-bullseye

WORKDIR /usr/src/app

# Copiar PRIMEIRO a pasta prisma
COPY package.json package-lock.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate
RUN npx tsc

EXPOSE 8080  # ← Mude para 8080

CMD npx prisma db push && node dist/server.js