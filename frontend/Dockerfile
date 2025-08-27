FROM node:18
WORKDIR /app
COPY package*.json ./
# Install all dependencies (including dev) so Next.js won't try to install at runtime in development
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm","run","start"]
