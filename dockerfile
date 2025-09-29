# Use the official Node.js image as the base image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Set environment variables for the frontend
ENV NEXT_PUBLIC_API_URL=http://localhost:3001
ENV NEXT_PUBLIC_APP_NAME="Rail Route API Tester"

# Build the Next.js application for production
RUN npm run build

# Use a lightweight Nginx image as the final stage
FROM nginx:1.21-alpine

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built application from the builder stage
COPY --from=builder /app/.next/static /usr/share/nginx/html/_next/static
COPY --from=builder /app/public /usr/share/nginx/html
COPY --from=builder /app/.next/server/pages /usr/share/nginx/html/_next/server/pages

# Expose port 80 to the host machine
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]