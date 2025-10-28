FROM node:21-bullseye

WORKDIR /usr/src/app

# Copiar arquivos de dependências e Prisma
COPY package.json package-lock.json ./
COPY prisma ./prisma/

# Instalar dependências
RUN npm install

# Copiar o resto do código
COPY . .

# Build da aplicação
RUN npx prisma generate && npx tsc

# Expor porta (sem comentários na mesma linha)
EXPOSE 8080

# Comando de inicialização
CMD npx prisma db push && node dist/server.js