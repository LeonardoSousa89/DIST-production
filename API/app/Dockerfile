FROM node:14     

WORKDIR /src
		
COPY package*.json ./ 	 
		
RUN npm install
		
COPY . .
		
EXPOSE 8766
		
CMD ["node", "index.js"]	