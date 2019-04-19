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



//Create Database Connection
var pgp = require('pg-promise')();

/**********************
  Database Connection information
  host: ec2-54-225-129-101.compute-1.amazonaws.com
  port: 5432;
  database: d1pjf7j45lf5pj
  user: brlletohmrgqrv
  password: 4d8bbac5a3ba0b0666f61c1949c16c07ea72c6980a05eba8d413e288dfa7ffa7
**********************/

const dbConfig = process.env.DATABASE_URL;


var db = pgp(dbConfig);



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
  Registration Page: 
      /registration - post request
        User Registration Form, updates userreg table in postgres
  Home Page:
  		/home - get request 
  				Should have a table of all of the users citations


  		/team_stats - get request (no parameters)
  			This route will require no parameters.  It will require 3 postgres queries which will:
  				1. Retrieve all of the football games in the Fall 2018 Season
  				2. Count the number of winning games in the Fall 2018 Season
  				3. Count the number of lossing games in the Fall 2018 Season
  			The three query results will then be passed on to the team_stats view (pages/team_stats).
  			The team_stats view will display all fo the football games for the season, show who won each game, 
  			and show the total number of wins/losses for the season.

************************************/

// login page 
app.get('/', function(req, res) {
	res.render('pages/login',{
		local_css:"signin.css", 
		my_title:"Login Page"
	});
});

// registration page 
app.get('/register', function(req, res) {
	res.render('pages/register',{
		my_title:"Registration Page"
	});
});

// registration page form submit
app.post('/register', function(req, res) {
  console.log(req.body.fullName);

  var firstName = req.body.firstName;
  var lastName = req.body.LastName;
  var email = req.body.email;
  var confEmail = req.body.confEmail;
  var phone = req.body.phone;
  var password = req.body.password;
  var confPass = req.body.confPass;
  var security1 = req.body.security1;
  var security2 = req.body.security2;
  
/*Validation
Ignoring email and password validation for now, we don't really need it 
*/


//Insert into Database
  var insert_statement = "INSERT INTO userreg(email, password, firstname, lastname, security1, security2, phone) VALUES('" + email + "','" + 
              password + "','" + firstName + "','" + lastName + "','" + security1 + "','" + security2 + "','" + phone + "');";
   

// OR: return error


  res.send('hello world');
});

// home page 
app.get('/home', function(req, res) {
	var query = 'select * from favorite_colors;';
	db.any(query)
        .then(function (rows) {
            // render views/store/list.ejs template file
            res.render('pages/home',{
				my_title: "Home Page",
				data: rows,
				color: '',
				color_msg: ''
			})

        })
        .catch(function (err) {
            // display error message in case an error
            request.flash('error', err);
            response.render('pages/home', {
                title: 'Home Page',
                data: '',
                color: '',
                color_msg: ''
            })
        })
	
});


// Player's Information Page
app.get('/player_info', function(req, res) {
	var query = 'select id, name from football_players;'
	db.any(query)
        .then(function (rows) {
            // render views/store/list.ejs template file
            res.render('pages/player_info',{
				my_title: "Football Player Information",
				players: rows,
				player_info: '',
                games_played: ''
			})

        })
        .catch(function (err) {
            // display error message in case an error
            request.flash('error', err);
            response.render('pages/player_info', {
                title: 'Football Player Information',
                players: '',
                player_info: '',
                games_played: ''
            })
        })
	
});


var listener = app.listen(process.env.PORT, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 
});