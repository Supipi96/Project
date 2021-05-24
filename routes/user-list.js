var express = require('express');
const { Client } = require('pg');
const { pool } = require('../config/db');
var router = express.Router();


router.get('/', function(req, res, next) {
  var sql='SELECT * FROM guests';
  pool.query(sql, function (err, data, fields) {
  if (err) throw err;
  //console.log('The solution is', data)
  console.log('The solution is', data.first_name)
  res.render('user-list', { title: 'User List', userData: data});
});
});





// another routes also appear here
// this script to fetch data from MySQL databse table
/* router.get('/', function(req, res, next) {

  var personList = [];
//var userslist = "SELECT * FROM users ORDER BY id"; 

  /*pool.query(
    "SELECT * FROM guests", [
      ['id', 'first_name', 'last_name', 'address', 'contact_no', 'email']
    ],function(err, rows, fields){
      if (err) {
        res.status(500).json({"status_code": 500,"status_message": "internal server error"});
      } else {
        console.log(rows)

        for (var i = 0; i < rows.length; i++) {

          // Create an object to save current row's data
          var person = {
              'first_name':rows[i].first_name,
              'last_name':rows[i].last_name,
              'address':rows[i].address,
              'id':rows[i].id
          }
          // Add object into array
          personList.push(person);
        }
        res.render('user-list', {"personList": personList});
      }
    }
  );


 pool.query('SELECT * FROM guests' , [
  ['id', 'first_name', 'last_name', 'address', 'contact_no', 'email']
], function(err, rows, fields) {
  if (err) {
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
  } else {
      console.log(rows);
      // Loop check on each row
      for (var i = 0; i < rows.length; i++) {

          // Create an object to save current row's data
          var person = {
              'first_name':rows[i].first_name,
              'last_name':rows[i].last_name,
              'address':rows[i].address,
              'id':rows[i].id
          }
          // Add object into array
          personList.push(person);
      }

  res.render('user-list', {"personList": personList});
  }


});

}) */


/*  router.get('/', function(req, res, next) {
    let sql = " SELECT * FROM guests";
      res.render('user-list',{
        vegetables: [
          "carrot",
          "potato",
          "beet"
      ]
      });
    });

app.get('/user-list', function (req, res, next) {

  var personList = [];
//var userslist = "SELECT * FROM users ORDER BY id";    
  pool.query('SELECT * FROM guests', function(err, rows, fields) {
  if (err) {
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
  } else {
      // Loop check on each row
      for (var i = 0; i < rows.length; i++) {

          // Create an object to save current row's data
          var person = {
              'first_name':rows[i].first_name,
              'last_name':rows[i].last_name,
              'address':rows[i].address,
              'id':rows[i].id
          }
          // Add object into array
          personList.push(person);
  }

  res.render('user-list', {"personList": personList});
  }
});


});*/


module.exports = router;


