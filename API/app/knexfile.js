// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require('dotenv').config()

module.exports = {

  development: {
    client:     process.env.LOCAL_CLIENT,
    connection: {
      database: process.env.LOCAL_DB,
      user:     process.env.LOCAL_USER_DB,
      password: process.env.LOCAL_PASSWORD_DB
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client:     process.env.PROD_CLIENT,
    connection: {
      host :    process.env.PROD_HOST,
      database: process.env.PROD_DB,
      user:     process.env.PROD_USER_DB,
      password: process.env.PROD_PASSWORD_DB
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};
