const { users }=require('../interface/users.js')

const knex=require('../repository/db.js')


async function createUser(req, res){

    let _USERS=users(req, 'Users')

    await knex.insert(_USERS)
              .from('dist_users')
              .then(_=>res.status(201).json({msg: 'Account successfully created'}))
              .catch(_=>res.status(400).json({msg: 'Was an error, verify if some field is empty or perhaps your email already exists'}))

}


async function getUserById(req, res){

    let userid=req.params.userId
 
    await knex.select(['username', 'email']).from('dist_users')
              .where('userid', userid)
              .then(response=>{
 
                 if(response<=0) {
                     return res.status(404).json({msg: 'Resource not found'})
                 }
                 
                 return res.status(200).json(response)
 
              })
              .catch(_=>res.status(500).json({msg: "i'm sorry has an error with server"}))

}


module.exports={ createUser, getUserById }