const knex=require('../db/db.js')

//https://www.npmjs.com/package/knex-paginate
const { attachPaginate } = require('knex-paginate');
attachPaginate();

const express=require('express')
const server=express.Router()




server.route('/dist/worker/user-account/administration').post(async(req, res)=>{

    let data={
        userid: req.body.userid,
        username: req.body.username,
        email: req.body.email
    }

    await knex.insert(data)
              .from('dist_users')
              .then(_=>{res.status(201).send('Account successfully created')})
              .catch(err=>res.status(400).send('Was an error, verify if some field is empty or perhaps your email already exists'))  

})




server.route('/dist/worker/user-account/:userId/administration').get(async(req, res)=>{
   
    let userid=req.params.userId
 
    await knex.select(['username', 'email'])
              .from('dist_users')
              .where('userid', userid)
              .then(response=>{
 
                 if(response<=0) {
                     return res.status(404).send('Resource not found')
                 }
                 
                 return res.status(200).json(response)
 
              })
              .catch(err=>res.status(404).send(err))
 
})




server.route('/dist/worker/administration').post(async(req, res)=>{
   
    let data={
        workername: req.body.workername,
        workeremail: req.body.workeremail,
        workerpost: req.body.workerpost,
        workeraddress: req.body.workeraddress,  
        workerphonenumber: req.body.workerphonenumber,
        workerage: req.body.workerage,
        user_id: req.body.user_id 
    }

    await knex.insert(data)
              .from('dist_workers')
              .then(_=>res.status(201).send('Worker created'))
              .catch(err=>res.status(400).send('Was an error, verify if some field is empty or perhaps your email already exists'))

})




server.route('/dist/worker/:userId/administration').get(async(req, res)=>{
   
   let userid=req.params.userId


   let size=req.query.size
   
   if(!size){ 
       size=5 
    }
    
    
    let page=req.query.page
   
    if(page<=0){
        page=1
    }

   await knex.select(['workername', 
                      'workeremail', 
                      'workerpost', 
                      'workeraddress', 
                      'workerphonenumber',
                      'workerage'])
             .from('dist_users')
             .innerJoin('dist_workers', 'userid' , 'user_id')
             .where('userid', userid)
             .paginate({ perPage: size, currentPage: page })
             .then(response=>{

                if(response.data<=0) {
                    return res.status(404).send('Resource not found')
                }

                return res.status(200).json(response)

             })
             .catch(err=>res.status(404).send(err))

})
 



module.exports=server   