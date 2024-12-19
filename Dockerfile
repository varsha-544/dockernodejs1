# Use the official Node.js runtime as the base image
FROM node:16-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the local repository content into the container
COPY . .

# Run the JavaScript file using Node.js
CMD ["node", "calculator.js"]

