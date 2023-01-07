const knex=require('../db/db.js')

//https://www.npmjs.com/package/knex-paginate
const { attachPaginate } = require('knex-paginate');
attachPaginate();

const express=require('express')
const server=express.Router()




server.route('/dist/worker/user-account/administration').post(async(req, res)=>{

    
    
})




server.route('/dist/worker/user-account/:userId/administration').get(async(req, res)=>{
   
    let userid=req.params.userId
 
    await knex.select(['username', 'email'])
              .from('dist_users')
              .where('userid', userid)
              .then(response=>{
 
                 if(response<=0) {
                     return res.status(404).send('User not found.')
                 }
                 
                 return res.status(200).json(response)
 
              })
              .catch(err=>res.status(404).json(err))
 
})




server.route('/dist/worker/administration').post(async(req, res)=>{
   
    
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

                if(response.pagination.total<=0) {
                    return res.status(404).send('User not found.')
                }

                return res.status(200).json(response)

             })
             .catch(err=>res.status(404).json(err))

})
 



module.exports=server   