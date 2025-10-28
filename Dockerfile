FROM node:21-bullseye

WORKDIR /usr/src/app

# Copiar arquivos de dependências e Prisma
COPY package.json package-lock.json ./
COPY prisma ./prisma/

# Instalar dependências e gerar Prisma Client (sem DB push)
RUN npm install
RUN npx prisma generate

# Copiar o resto do código e fazer build
COPY . .
RUN npx tsc

# Expor porta
EXPOSE 8080

# Comando de inicialização (DB push só no runtime quando DATABASE_URL estiver disponível)
CMD npx prisma db push && node dist/server.js