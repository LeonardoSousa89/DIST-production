const { workers }=require('../interface/workers.js')
const { pagination, pageable }=require('../interface/pagination')

const knex=require('../repository/db.js')


//https://www.npmjs.com/package/knex-paginate
const { attachPaginate } = require('knex-paginate');
attachPaginate();


async function createWorker(req, res){

    let _WORKERS=workers(req)

    await knex.insert(_WORKERS)
              .from('dist_workers')
              .then(_=>res.status(201).json({msg: 'Worker created'}))
              .catch(err=>res.status(400).json({msg: 'Was an error, verify if some field is empty or perhaps your email already exists'}))

}


async function getWorkersByUserId(req, res){

    let userid=req.params.userId
    
    pageable(req)

    await knex.select(['workername', 'workeremail', 
                       'workerpost', 'workeraddress', 
                       'workerphonenumber','workerage'])
              .from('dist_users')
              .innerJoin('dist_workers', 'userid' , 'user_id')
              .where('userid', userid)
              .paginate({ perPage: pagination.size, currentPage: pagination.page })
              .then(response=>{
 
                 if(response.data<=0) {
                     return res.status(404).json({msg: 'Resource not found'})
                 }
 
                 return res.status(200).json(response)
 
              })
              .catch(_=>res.status(500).json({msg: "i'm sorry has an error with server"}))

}


module.exports={ createWorker, getWorkersByUserId }