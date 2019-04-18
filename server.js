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
const { Pool, Client } = require('pg')
const connectionString = 'postgres://brlletohmrgqrv:4d8bbac5a3ba0b0666f61c1949c16c07ea72c6980a05eba8d413e288dfa7ffa7@ec2-54-225-129-101.compute-1.amazonaws.com:5432/d1pjf7j45lf5pj'

const pool = new Pool({
  connectionString: connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  connectionString: connectionString,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

/**********************
  Database Connection information: All set by Heroku
  host: ec2-54-225-129-101.compute-1.amazonaws.com
  port: 5432
  database: d1pjf7j45lf5pj
  user: brlletohmrgqrv
  password: 4d8bbac5a3ba0b0666f61c1949c16c07ea72c6980a05eba8d413e288dfa7ffa7
  URI: postgres://brlletohmrgqrv:4d8bbac5a3ba0b0666f61c1949c16c07ea72c6980a05eba8d413e288dfa7ffa7@ec2-54-225-129-101.compute-1.amazonaws.com:5432/d1pjf7j45lf5pj

**********************/



// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory

// Homepage 
app.get('/Homepage', function(req, res) {
  res.render('pages/home',{
    my_title:"Homepage"
  });
});


// Registration page 
app.get('/registeration', function(req, res) {
  res.render('pages/registration',{
    my_title:"Registration Page"
  });
});
