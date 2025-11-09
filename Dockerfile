# Gunakan base image Node.js
FROM node:18

# Set working directory
WORKDIR /app

# Copy file package.json & install dependencies
COPY package*.json ./
RUN npm install

# Copy semua file kode
COPY . .

# Jalankan aplikasi
CMD ["npm", "start"]
