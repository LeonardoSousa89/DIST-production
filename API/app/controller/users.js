const { createUser, getUserById }=require('../services/users.js')
const { policy }=require('../config/security/cross-origin-police/cors.js')

const express=require('express')
const server=express.Router()


server.route('/dist/worker/user-account/administration').post((req, res)=>{

    createUser(req, res)

})


server.route('/dist/worker/user-account/:userId/administration').get(async(req, res)=>{

    getUserById(req, res)
   
})
 

module.exports=server   