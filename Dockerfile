FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]