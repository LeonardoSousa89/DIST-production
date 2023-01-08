const { createUser, getUserById, createWorker, getWorkersByUserId }=require('../services')

const express=require('express')
const server=express.Router()


server.route('/dist/worker/user-account/administration').post((req, res)=>{

    createUser(req, res)

})


server.route('/dist/worker/user-account/:userId/administration').get(async(req, res)=>{

    getUserById(req, res)
   
})


server.route('/dist/worker/administration').post(async(req, res)=>{
   
    createWorker(req, res)

})


server.route('/dist/worker/:userId/administration').get(async(req, res)=>{
   
   getWorkersByUserId(req, res)

})
 

module.exports=server   