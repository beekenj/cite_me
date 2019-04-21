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
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added

var app = express();

app.use(cookieParser('secret'));
app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash()); // setup the flash for flashing info/errors to client
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
        ssl: true,
        port: 5432,
        database: 'd1pjf7j45lf5pj',
        user: 'brlletohmrgqrv',
        password: '4d8bbac5a3ba0b0666f61c1949c16c07ea72c6980a05eba8d413e288dfa7ffa7'
};


//Create Database Connection
const pgp = require('pg-promise')();

const db_remote_Config = undefined;// = process.env.DATABASE_URL;
var db = "";
if(db_remote_Config)
{ 
  db = pgp(db_remote_Config);
}else{
  db = pgp(dbConfig)
}


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


///////////////////////////////////////REGISTRATION///////////////////////////////////

// load registration page 
app.get('/register', function(req, res) {
	res.render('pages/register',{
		my_title:"Registration Page"
	});
});

// Submit Registration Info
app.post('/register', function(req, res) {
  console.log(req.body);

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var phone = req.body.phone;
  var password = req.body.password;
  var security1 = req.body.security1;
  var security2 = req.body.security2;
  
  //Insert into Database
  var insert_statement = "INSERT INTO userreg(email, password, firstname, lastname, security1, security2, phone) VALUES('" + email + "','" + 
              password + "','" + firstName + "','" + lastName + "','" + security1 + "','" + security2 + "','" + phone + "');";
  
  console.log("query: %s", insert_statement);

  db.task('write-everything', task => {
        return task.batch([
            task.any(insert_statement)
        ]);
    })
    .then(info => {
      console.log("POST /register\n%s", info);
      res.render('pages/home', {
        my_title: "Registration Success"
      })
    })
    // Return error
    .catch(err => {
      // display error message in case an error
      console.log("POST /register\n%s", err);
      req.flash('error', err);
      res.render('pages/home', {
          my_title: 'Registration Failure',
      })
    });
});

////////////////////////////////////////////////CITATIONS//////////////////////////////////

//Load CitationForm page
app.get('/citationForm', function(req, res) {
  res.render('pages/citationForm',{
    my_title:"Citation Page"
  });
});

// Submit Citation Information
app.post('/citationForm', function(req, res) {
  console.log(req.body);

  var type = req.body.type;
  var style = req.body.style;
  var citString = req.body.citString;
  
//Insert Citations into Database
  var cit_insert_statement = "INSERT INTO usercitations(citationtype, citationstyle, html_string) VALUES('" + type + "','" + 
              style + "','" + citString + "');"
  console.log("query: %s", cit_insert_statement);

  db.task('write-everything', task => {
      return task.batch([
          task.any(cit_insert_statement)
      ]);
  })
      .then(info => {
        console.log("POST /citationForm\n%s", info);
        res.render('pages/citationForm', {
          my_title: "Citation Submission Success"
        })
      })
      // Return error
      .catch(err => {
        // display error message in case an error
        console.log("POST /citationForm\n%s", err);
        req.flash('error', err);
        res.render('pages/citationForm', {
            my_title: 'Citation Submission Failure',
        })
      });
});


///////////////////////////////////////////////HOMEPAGE///////////////////////////////////////

// Load Home Page 
app.get('/home', function(req, res) {
    res.render('pages/home',{
    my_title: "CiteMe HomePage",
    });
});
/*
 // Return error
  .catch(err => {
    // display error message in case an error
    console.log("POST /home\n%s", err);
    req.flash('error', err);
    res.render('pages/home', {
        my_title: 'Home Page Failure',
    })
  });

*/
var listener = app.listen(process.env.PORT

, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 

});


////////////////////////////////////////////////CITATIONS STATION//////////////////////////////////

//To Do Code for Users Citation Station

