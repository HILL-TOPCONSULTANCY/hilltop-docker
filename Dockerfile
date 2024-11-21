# Step 1: Use a lightweight Node.js image from DockerHub
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Expose the desired port (8070 in this case)
EXPOSE 3000

# Step 7: Set the environment variable for the port
ENV PORT=3000

# Step 8: Start the Node.js application
CMD ["npm", "start"]
