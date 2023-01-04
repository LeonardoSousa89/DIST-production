cd app 

type nul > index.js && type nul > .gitignore && type nul > Dockerfile && type nul > .dockerignore && type nul > app.yaml && type nul > procfile && type nul > .env

md  __test__  db  routes  api services 

cd __test__

type nul > index.test.js

cd ..

cd db 

type nul > db.js && type nul > db.sql

cd ..

cd routes 

type nul > routes.js 

cd ..

cd api 

type nul > index.js 

cd ..

cd services

md methods 

cd methods

type nul > index.js 

cd ..	

type nul > index.js 

echo há um bug abaixo e é necessário replicar o comando da 1° instalação para que o mesmo funcione

echo as chamadas abaico devem ser feita em linha reta, caso quebre a linha gera erro.

cd .. && npm i --save jwt-simple && npm i --save jwt-simple && npm i --save express && npm i --save cors && npm i --save pg && npm i --save knex && npm i --save bcrypt &&  npm i --save-dev nodemon morgan jest && knex init && exit
