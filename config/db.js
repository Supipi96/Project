const pg = require('pg').native;
const config = require('../config');

const dbConfig = process.env.NODE_ENV === 'production'
  ? config.production_database
  : config.development_database;

const pool = new pg.Pool(dbConfig);
pool.on('error', (err) => {
  console.log('idle client error', err, err.message, err.stack);
});

module.exports = {
  pool,
  query: (text, params) => pool.query(text, params)
};



