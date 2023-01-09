const { security }=require('./config/security/cross-origin-police/cors.js')

const usersController=require('./controller/users.js')
const workersController=require('./controller/workers.js')

require('dotenv').config()

const port=process.env.HOST_PORT

const express=require('express')
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', security)
app.use('/', usersController)
app.use('/', workersController)

app.listen(port)