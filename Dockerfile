# Build Phase
FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Run Phase
# use nginx
FROM nginx
EXPOSE 80
#copy results of build 
COPY --from=0 /app/build /usr/share/nginx/html
#start nginx -> already default command!