# Use the official image as a parent image.
FROM node:12

# Set the working directory.
WORKDIR /usr/src/dex-backend

# Copy the file from your host to your current location.
COPY package*.json ./

ARG NODE_ENV

# Run the command inside your image filesystem.
RUN if [ "$NODE_ENV" = "development" ]; \
	then npm install;  \
	else npm install --only=production; \
	fi

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 3000

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .