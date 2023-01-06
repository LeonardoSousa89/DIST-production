const port=8766

const cors=require('cors')
const server=require('./routes/routes.js')
const express=require('express')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/', server)

app.listen(port)