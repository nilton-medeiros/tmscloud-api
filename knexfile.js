// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config();

module.exports = {
  dbuser_ap: {
    client: 'mysql2',
    connection: {
      host: process.env.HOST,
      port: 3306,
      user: process.env.AP_DBUSER,
      password: process.env.PASSWORD,
      database: process.env.AP_DBUSER
    },
  },
  dbuser_lw: {
    client: 'mysql2',
    connection: {
      host: process.env.HOST,
      port: 3306,
      user: process.env.LW_DBUSER,
      password: process.env.PASSWORD,
      database: process.env.LW_DBUSER
    },
  },
};
