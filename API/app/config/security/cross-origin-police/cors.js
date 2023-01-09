const cors=require('cors')

const express=require('express')
const security=express()

security.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods",['GET','POST'])
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
    security.use(cors())
    next()
})

module.exports={ security }