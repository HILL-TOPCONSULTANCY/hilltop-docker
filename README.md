Here's a `README.md` file that includes the step-by-step instructions, from Docker installation to accessing the Node.js application on your EC2 instance:

---

# Hilltop Consultancy Web Application

This is a simple Node.js application for an IT consultancy firm, **Hilltop Consultancy**, which offers services such as web development, IT consultancy, DevOps solutions, and cloud training. The application is Dockerized for easy deployment.

## Prerequisites

Make sure the following are installed on your EC2 instance or local machine:

- **Docker**
- **Node.js** (for local development)
  
## Steps to Set Up and Run the Application

### 1. Install Docker on Your EC2 Instance

First, install Docker on your EC2 instance if it is not already installed:

```bash
#!/bin/bash
sudo yum update -y
sudo yum -y install docker
sudo service docker start
sudo systemctl enable docker.service 
sudo usermod -a -G docker ec2-user 
sudo chmod 666 /var/run/docker.sock
```

Log out and back in again to apply the Docker group changes.

Verify Docker is installed by running:

```bash
docker --version
```

### 2. Install Node.js (for Local Development)

If you're running this project locally (not necessary inside Docker):

```bash
sudo yum install -y nodejs
node -v
npm -v
```

### 3. Clone the Repository or Create the Project Directory

```bash
git clone https://github.com/HILL-TOPCONSULTANCY/hilltop-docker.git
cd hilltop-docker
```

### 4. Set Up Node.js Project

Initialize the Node.js project:

```bash
npm init -y
```

### 5. Install Dependencies

Install the required dependencies, such as `express` and `ejs`:

```bash
npm install express ejs
```

<!-- ### 6. Create the Application Files

- Create an `app.js` file to handle the Node.js logic.
- Create a `views/` folder with an `index.ejs` file for the frontend.
- Create a `public/` folder for static assets like CSS and images.
  
### 7. Create the `Dockerfile`

Create a `Dockerfile` in your project directory for building the Docker image:

```Dockerfile
# Step 1: Use a lightweight Node.js image
FROM node:18-alpine

# Step 2: Set the working directory
WORKDIR /usr/src/app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the application code
COPY . .

# Step 5: Expose port 8070
EXPOSE 8070

# Step 6: Set the default command to run the application
CMD ["npm", "start"]
```

### 8. Update the `package.json`

Make sure your `package.json` includes a `"start"` script:

```json
{
  "name": "hilltop-docker",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ejs": "^3.1.10",
    "express": "^4.21.0"
  }
} -->
```

### 9. Build the Docker Image

After setting up the Dockerfile, build the Docker image:

```bash
docker build -t hilltop-consultancy-app .
```

### 10. Run the Docker Container

Once the image is built, run the container and expose it on port `8070`:

```bash
docker run -d -p 8070:8070 --name hilltop hilltop-consultancy-app
```
# Ensure port 8070 rule is open on the security Group
### 11. Check the Logs

Verify that the container is running successfully by checking the Docker logs:

```bash
docker logs hilltop
```

You should see a message like:

```
Application is running and accessible on port 8070
```

### 12. Access the Application

Finally, access the application in your browser by navigating to:

```
http://<your-ec2-public-ip>:8070
```

To find the public IP of your EC2 instance, you can run:

```bash
curl http://169.254.169.254/latest/meta-data/public-ipv4
```

### 13. Stop and Remove the Docker Container

To stop the container:

```bash
docker stop hilltop
```

To remove the container:

```bash
docker rm hilltop
```

To remove the image:

```bash
docker rmi hilltop-consultancy-app
```

## Troubleshooting

If you encounter any issues during the process, make sure:
- Docker is running properly.
- The necessary dependencies are installed.
- The ports are correctly mapped and accessible.

