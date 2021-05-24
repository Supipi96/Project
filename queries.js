// queries.js

const Pool = require('pg').Pool
const pool = new Pool({
   user: 'pstgres',
   host: 'localhost',
   database: 'xoom_db',
   password: 'test123',
   port: 5432,
})

const getStats = (request, response) => {
  pool.query('SELECT guests."first_name" AS firstName, "last_name" AS lastName FROM guests ', (error, result) => {
    if (error) {
      throw error
    }
    response.status(200).render('user-list', {title: 'Footfall counter statistical reporter', rows: result.rows})
    
  })
}

module.exports = {
  getStats
}

