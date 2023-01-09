const { createWorker, getWorkersByUserId }=require('../services/workers.js')

const express=require('express')
const server=express.Router()


server.route('/dist/worker/administration').post(async(req, res)=>{
   
    createWorker(req, res)

})
 

server.route('/dist/worker/:userId/administration').get(async(req, res)=>{
   
    getWorkersByUserId(req, res)
 
})


module.exports=server   