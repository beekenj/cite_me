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

//Create Database Connection
var pgp = require('pg-promise')();

/**********************
  Database Connection information
  host: This defines the ip address of the server hosting our database.  
  port: This defines what port we can expect to communicate to our database.  
  database: This is the name of our specific database.  
  user: User is set by Heroku
  password: This the password for accessing the database.  Password is set by Heroku!
**********************/
const dbConfig = {
  host: 'ec2-54-225-129-101.compute-1.amazonaws.com',
  port: 5432,
  database: 'd1pjf7j45lf5pj',
  user: 'brlletohmrgqrv',
  password: '4d8bbac5a3ba0b0666f61c1949c16c07ea72c6980a05eba8d413e288dfa7ffa7'
};

var db = pgp(dbConfig);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory

// registration page 
app.get('/registeration', function(req, res) {
  res.render('pages/register',{
    my_title:"Registration Page"
  });
});
