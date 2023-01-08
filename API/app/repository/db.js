const file=require('../knexfile')['production']
const knex=require('knex')(file)

module.exports=knex