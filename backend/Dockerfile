FROM node:18-alpine

# Create app dir
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install --production

# Copy source
COPY . .

# Expose port
ENV PORT=5000
EXPOSE 5000

# Start
CMD ["node", "server.js"]
