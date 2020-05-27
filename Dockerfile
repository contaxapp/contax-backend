# Use the official image as a parent image.
FROM node:12

# Set the working directory.
WORKDIR /usr/src/dex-backend

# Copy the file from your host to your current location.
COPY package*.json ./

# Run the command inside your image filesystem.
RUN npm install

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 3000

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Get NODE_ENV Variable
ARG NODE_ENV

# Run the specified command within the container.
# RUN if [ "$NODE_ENV" = "production" ] ; then npm start ; else npm run watch:dev ; fi

CMD ["npm", "start"]