/***********************
Name - Panther Epidemic
Date - 04/17/2019
Class - Software Development Methods and Tools
Author- Jenn Riley
***********************/

/***********************
  Load Components!

  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database
***********************/
var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/**********************
  Database Connection information
  host: ec2-54-225-129-101.compute-1.amazonaws.com
  port: 5432;
  database: d1pjf7j45lf5pj
  user: brlletohmrgqrv
  password: 4d8bbac5a3ba0b0666f61c1949c16c07ea72c6980a05eba8d413e288dfa7ffa7
**********************/

const dbConfig = {
        host: 'ec2-54-225-129-101.compute-1.amazonaws.com',
        port: 5432,
        database: 'd1pjf7j45lf5pj',
        user: 'brlletohmrgqrv',
        password: '4d8bbac5a3ba0b0666f61c1949c16c07ea72c6980a05eba8d413e288dfa7ffa7'
};


//Create Database Connection
const pgp = require('pg-promise')();

const db_remote_Config = process.env.DATABASE_URL;
var db = "";
if(db_remote_Config)
{ 
  db = pgp(db_remote_Config);
}else{
  db = pgp(dbConfig)
}


/*
var connectionString = "postgres://brlletohmrgqrv:4d8bbac5a3ba0b0666f61c1949c16c07ea72c6980a05eba8d413e288dfa7ffa7@ec2-54-225-129-101.compute-1.amazonaws.com:*5432/d1pjf7j45lf5pj"

pg.connect(connectionString, function(err, client, done) {
   client.query('SELECT * FROM userreg', function(err, result) {
      done();
      if(err) return console.error(err);
      console.log(result.rows);
   });
});

*/


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory



/*********************************
 Below we'll add the get & post requests which will handle:
   - Database access
   - Parse parameters from get (URL) and post (data package)
   - Render Views - This will decide where the user will go after the get/post request has been processed

 Web Page Requests:

  Login Page: 
    Simple User login that validates from the user reg page
    Creates a user instance.       
  Registration Page: 
      /registration - post request
        User Registration Form, updates userreg table in postgres
  
Citation Form:
      /citationForm - post request
      1. User fills in formfields
      2. Uploads to database
      3. Creates a new citation in the database

  Home Page:
  		/home - get request 
          Should have a table of all of the users citations
          1. Retrieve all of the citations that the user has created.
          2. Need to figure out if they are going to be rewriteable.
  
************************************/

// login page 
app.get('/', function(req, res) {
	res.render('pages/login',{
		local_css:"signin.css", 
		my_title:"Login Page"
	});
});


//REGISTRATION
// load registration page 
app.get('/register', function(req, res) {
	res.render('pages/register',{
		my_title:"Registration Page"
	});
});

// Submit Registration Info
app.post('/register', function(req, res) {
  console.log(req.body);
  console.log(req.body.firstName);

  var firstName = req.body.firstName;
  var lastName = req.body.LastName;
  var email = req.body.email;
  var phone = req.body.phone;
  var password = req.body.password;
  var security1 = req.body.security1;
  var security2 = req.body.security2;
  
//Insert into Database
  var insert_statement = "INSERT INTO userreg(email, password, firstname, lastname, security1, security2, phone) VALUES('" + email + "','" + 
              password + "','" + firstName + "','" + lastName + "','" + security1 + "','" + security2 + "','" + phone + "');";
   
  db.task('get-everything', task => {
        return task.batch([
            task.any(insert_statement)
        ]);
    })
/*
  .then(info=> {
    res.render('pages/register', {
      my_title: "Registration Page",
      data: info[0],
    })
  })

// Return error
    .catch(error => {
        // display error message in case an error
            request.flash('error', err);
            response.render('pages/register', {
                title: 'Registration Page',
                data: '',
            })
    })
*/
//test phrase
  res.send('hello world');
});


//CitationForm
app.get('/citationForm', function(req, res) {
  res.render('pages/citationForm',{
    my_title:"Citation Station"
  });
});

/*

// Citation form submit Function
app.post('/citationForm', function(req, res) {
  console.log(req.body.fullName);


  //TODO Create Form Variables
  var type = req.body.type;
  var style = req.body.style;
  
//Insert Citations into Database

//To DO create citation insert statement
  var insert_statement;
   

// OR: return error



// home page 
app.get('/home', function(req, res) {
	db.any(query)
        .then(function (rows) {
            // render views/store/list.ejs template file
            res.render('pages/home',{
				    my_title: "CiteMe HomePage",
			      })

        })
        .catch(function (err) {
            // display error message in case an error
            request.flash('error', err);
            response.render('pages/home', {
                title: 'CiteMe HomePage',
            })
        })
	
});
*/

var listener = app.listen(process.env.PORT|3000

, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 

});
 
