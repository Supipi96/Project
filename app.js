var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var db = require('./queries')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var batchitembreakfastRouter = require('./routes/batch-item-breakfast');
var breakfastRouter = require('./routes/breakfast');
var food1Router = require('./routes/food1');
var packageRouter = require('./routes/package');
var parkingRouter = require('./routes/parking');
var returnRouter = require('./routes/return');
var paymentRouter = require('./routes/payment');
var selectRouter = require('./routes/select');
var spaRouter = require('./routes/spa');
var summeryRouter = require('./routes/summery');

var userRouter = require('./routes/user-list');

// Admin
var categoryRouter = require('./routes/admin/category');
var dashboardRouter = require('./routes/admin/dashboard');
var itemsRouter = require('./routes/admin/items');
var loginRouter = require('./routes/admin/login');
var organizationRouter = require('./routes/admin/organization');
var roomsRouter = require('./routes/admin/rooms');
var servicesRouter = require('./routes/admin/services');
var subcategoryRouter = require('./routes/admin/subcategory');
const { pool } = require('./config/db');
const { Pool } = require('pg');
const { title } = require('process');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', usersRouter);
app.use('/batch-item-breakfast', batchitembreakfastRouter);
app.use('/breakfast', breakfastRouter);
app.use('/food1', food1Router);
app.use('/package', packageRouter);
app.use('/parking', parkingRouter);
app.use('/return', returnRouter);
app.use('/payment', paymentRouter);
app.use('/select', selectRouter);
app.use('/spa', spaRouter);
app.use('/summery', summeryRouter);

app.use('/user-list', userRouter);


// Admin
app.use('/admin/category',categoryRouter);
app.use('/admin/dashboard',dashboardRouter);
app.use('/admin/items',itemsRouter);
app.use('/admin/login',loginRouter);
app.use('/admin/organization',organizationRouter);
app.use('/admin/rooms',roomsRouter);
app.use('/admin/services',servicesRouter);
app.use('/admin/subcategory',subcategoryRouter);

/*app.get('/user-list', (req,res) => {
  let sql = " SELECT * FROM guests";
  let query = pool.query(sql, (err, rows) => {
    console.log('The solution is: ', rows);
    if(err) throw err;
    res.render('user-list' ,{
      message : "User Details",
      users : rows,
    })

  })
})*/

/*app.get('/user-list', function (req, res, next) {

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


/*app.get('/user-list', function(req, res) {
	var personList = [];

	// Do the query to get data.
	pool.query('SELECT * FROM guests', function(err, result, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
	  		// Loop check on each row
        console.log('The solution is: ', result);
        console.log("Row count: %d",result.rows.length); 
	  		for (var i = 0; i < result.rows.length; i++) {

          console.log('came to the array');

	  			// Create an object to save current row's data
		  		var person = {
		  			'first_name':result[i].first_name,
		  			'last_name':result[i].last_name,
		  			'address':result[i].address
		  		}

          
		  		// Add object into array
		  		personList.push(person);
          console.log('Pushed to person');
	  	}
      console.log('ready to render the page');
	  	// Render index.pug page using array 
	  	res.render('user-list', {"personList": personList, title : 'test'});
	  	}
	});
	
});*/

/*app.get('/user-list', function(req, res) {

  pool.query('SELECT * From guests', function (error, results, fields) {
   if (error) throw error;
   console.log('The solution is: ', results);
  
   res.render('user-list', {
      title: 'Details - Pug ExpressJS NodeJS Tutorial',
      employees: results
    });
  
  });
  
});*/

/* app.get('/user-list', function(req,res){
  res.render('user-list', {
    title:'hi'
  });
});*/



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//app.get('/user-list', pool.getAllPuppies);

//app.get('/views/user-list', db.getStats)

//execute();

/* async function execute(){
  try{
    await pool.connect()
    console.log("Connected successfully.")
    const results = await db.getStats(rows)
    console.table(results)
	  console.log("Client disconnected successfully")
	  //res.render('user-list', {message :'hello'});
    await pool.end()
    
  }
  catch (ex){
    console.log("Something wrong happened")
  }
}*/ 


//testing
/* app.get('/user-list', function(req, res) {

  pool.query('SELECT * From `guests`', function (error, results, fields) {
   if (error) throw error;
   console.log('The solution is: ', results);
  
   res.render('details', {
      title: 'Details - Pug ExpressJS NodeJS Tutorial',
      employees: results
    });
  
  });
  
}); 
*/



/*
app.get('/user-list', function(req, res){


	// Do the query to get data.
	pool.query('SELECT * FROM guests', function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
			//res.render('user-list', {personList: result.rows});
			//res.render('user-list', {personList: result.rows});
			res.render('user-list', {message :'hello'});
		}
	});

	// Close the MySQL connection
	pool.end();
	
});*/


app.listen(3000,function(){
  console.log('Server started on port 3000');
})


module.exports = app;
