FROM node     

WORKDIR /src
		
COPY package*.json ./ 	 
		
RUN npm install
		
COPY . .
		
EXPOSE 8766
		
CMD ["node", "index.js"]	