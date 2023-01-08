const { users, workers }=require('../model')

const knex=require('../repository/db.js')


//https://www.npmjs.com/package/knex-paginate
const { attachPaginate } = require('knex-paginate');
attachPaginate();

async function createUser(req, res){

    let _USERS=users(req)

    await knex.insert(_USERS)
              .from('dist_users')
              .then(_=>{res.status(201).json({msg: 'Account successfully created'})})
              .catch(err=>res.status(400).json({msg: 'Was an error, verify if some field is empty or perhaps your email already exists'}))  

}


async function getUserById(req, res){

    let userid=req.params.userId
 
    await knex.select(['username', 'email'])
              .from('dist_users')
              .where('userid', userid)
              .then(response=>{
 
                 if(response<=0) {
                     return res.status(404).json({msg: 'Resource not found'})
                 }
                 
                 return res.status(200).json(response)
 
              })
              .catch(err=>res.status(404).json(err))

}


async function createWorker(req, res){

    let _WORKERS=workers(req)

    await knex.insert(_WORKERS)
              .from('dist_workers')
              .then(_=>res.status(201).json({msg: 'Worker created'}))
              .catch(err=>res.status(400).json({msg: 'Was an error, verify if some field is empty or perhaps your email already exists'}))

}


async function getWorkersByUserId(req, res){

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
                     return res.status(404).json({msg: 'Resource not found'})
                 }
 
                 return res.status(200).json(response)
 
              })
              .catch(err=>res.status(404).json(err))

}


module.exports={ createUser, getUserById, createWorker, getWorkersByUserId }