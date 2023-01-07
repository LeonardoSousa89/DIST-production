const port=8766

const cors=require('cors')
const server=require('./controller/routes.js')
const express=require('express')
const app=express()

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods",['GET','POST'])
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
    app.use(cors())
    next()
})
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', server)

app.listen(port)