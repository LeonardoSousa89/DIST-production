const file=require('../knexfile')['development']
const knex=require('knex')(file)

module.exports=knex