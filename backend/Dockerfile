# ---------- Stage 1: Build Dependencies ----------
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install all dependencies (including dev)
RUN npm install

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# ---------- Stage 2: Production Image ----------
FROM node:18-slim

# Install only production dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production

# Copy prisma schema and generated client from builder
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Copy only necessary source files
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/src ./src

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
