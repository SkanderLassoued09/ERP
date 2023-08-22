# Stage 1: Build fe app
#use official node img
FROM node:14.20.0 AS build

#to set working directory 
WORKDIR /usr/src/app

#to copy package.json and package-lock.json
COPY package*.json ./

#to install dep
RUN npm install

#to copy the rest of the app
COPY . .

#build
RUN npm run build

# Stage 2: Serve the built app
#with nginx server
FROM nginx:alpine

#to copy the built app from the first stage to the nginx folder
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

#the port the app will be running on
EXPOSE 80

#starting the nginx server 
CMD ["nginx", "-g", "daemon off;"]
