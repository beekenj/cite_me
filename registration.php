<!--
	Matt Lay & Jenn Riley
	March 12, 2019
	Software Dev Methods and tools
-->



<!DOCTYPE html>
<html lang= "en">
<style>
 	.addAuthor {
	  background-color: white;
	  color: black;
	  border: 1px solid #555555;
	  border-radius: 4px;
	}
 </style>
 <head>
 	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
 	<title>Registration Page</title>
 	<link rel='icon' href='../resources/img/favicon.ico' type='image/x-icon'/>
 	
 	<!-- Bootstrap core CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">  
	<link href="./resources/css/my_style.css" rel="stylesheet">
 </head>
 <body onLoad="changeForm()">
 <div class="container">

	</head>

		<body>

		<div class="page-header"> 
            <div class="text-center"> 
                  <h1>CiteMe<small> <br/> Registration</small></h1>
            </div> 
       </div>    

		<br>
		
		$dbconn = pg_connect("host=ec2-54-225-129-101.compute-1.amazonaws.com port=5432 dbname=d1pjf7j45lf5pj user=brlletohmrgqrv password=4d8bbac5a3ba0b0666f61c1949c16c07ea72c6980a05eba8d413e288dfa7ffa7");

		$fName = pg_escape_string(_POST['firstName']);
		$lName = pg_escape_string)_POST['lastName']);
		$email = pg_escape_string)_POST['email']);
		$confEmail = pg_escape_string)_POST['confEmail']);
		$password = pg_escape_string)_POST['password']);
		$confPass = pg_escape_string)_POST['confPass']);
		$security1 = pg_escape_string)_POST['security1']);
		$security2 = pg_escape_string)_POST['security2']);


		if(!empty ($fName)){
		return 0;
		}

		if(!empty ($lName)){
		return 0;
		}

		if(!empty ($email)){
		return 0;
		}
		
		if(!empty ($confEmail)){
		return 0;
		}
		
		if(!empty ($password)){
		return 0;
		}
		
		if(!empty ($confPass)){
		return 0;
		}
		
		if(!empty ($security1)){
		return 0;
		}
		
		if(!empty ($security2)){
		return 0;
		}
				

		if((email != confEmail){
			return "Error, your emails do not match."
		}

		if((password != confPass){
			return "Error, your passwords do not match."
		}

		$sql = "INSERT INTO userreg (email, password, firstname, lastname, security1, security2) values ('".$email."', '".$password."', '".$fName."', '".$lName."', '".$security1."', '".$security2."')";
		pq_query($dbconn, $sql);

		<form action="/action_page.php">
  			
  			<div class="form-group row">
		 		<label class="col-form-label col-sm-2" for="firstName">First Name: </label>
		 	    	<input type="text" class="form-control col-sm-4" name="firstName" id="firstName"  placeholder="Enter First Name">
	 	    </div>

  			<div class="form-group row">
		 		<label class="col-form-label col-sm-2" for="lastName">Last Name: </label>
		 	    	<input type="text" class="form-control col-sm-4" name="lastName" id="lastName"  placeholder="Enter Last Name">
	 	    </div>
		
		
			<div class="form-group row">
		 		<label class="col-form-label col-sm-2" for="email">Email: </label>
		 	    	<input type="text" class="form-control col-sm-4" name="email" id="email"  placeholder="Email used as log-in">
	 	    </div>

	 	    <div class="form-group row">
		 		<label class="col-form-label col-sm-2" for="confEmail">Confirm Email: </label>
		 	    	<input type="text" class="form-control col-sm-4" name="confEmail" id="confEmail"  placeholder="Confirm Email">
	 	    </div>
		
		
			<div class="form-group row">
		 		<label class="col-form-label col-sm-2" for="password">Password: </label>
		 	    	<input type="text" class="form-control col-sm-4" name="password" id="password"  placeholder="Password">
	 	    </div>
				
  			<div class="form-group row">
		 		<label class="col-form-label col-sm-2" for="confPass">Confirm Password: </label>
		 	    	<input type="text" class="form-control col-sm-4" name="confPass" id="confPass"  placeholder="Confirm Password">
	 	    </div>
			
			<div class="form-group row">
		 		<label class="col-form-label col-sm-2" for="security1">Security Question: </label>
		 	    	<input type="text" class="form-control col-sm-4" name="security1" id="security1"  placeholder="What is your favorite hobby?">
	 	    </div>

	 	    <div class="form-group row">
		 		<label class="col-form-label col-sm-2" for="security2">Security Question: </label>
		 	    	<input type="text" class="form-control col-sm-4" name="security2" id="security2"  placeholder="What is the meaning of life?">
	 	    </div>
		

		<div class= "container">
		<div class= "form-group">
		<button type= "button" class="btn btn-success btn-sm" class="offset-sm-9"> Submit </button>

</div>









		</form>




		





		</body>
		</html>
