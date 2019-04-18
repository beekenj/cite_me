var crypto = require('crypto'); //cryptographic algorithms
var mongoose = require('mongoose'); //object data modeling
var User = mongoose.model('User'); //creates a user model
var config = require('config'); //for node deployments
var qs = require('qs'); //querystring parsing and stringifying library with some added security.
var request = require('request'); //simplest ways to make http calls
var phoneReg = require('phone_verification')(config.API_KEY); //adds support to be able to verify a phone

const Client = require('authy-client').Client;
const authy = new Client({key: config.API_KEY});

function hashPW(pwd) {
    return crypto.createHash('md5').update(pwd).digest('base64').toString(); //encrypts the password
}

//grab the login for later use and check if they exist/are right
exports.login = function (req, res) {
    User.findOne({username: req.body.username})
        .exec(function (err, user) { //build a query and later execute it
            if (!document.getElementById("username")) {
                err = 'Username Not Found';
            } else if (('password' in req.body) && (user.hashed_password !==
                hashPW(req.body.password.toString()))) {
                err = 'Wrong Password';
            } else {
                createSession(req, res, user);
            }

            if (err) {
                res.status(500).json(err);
            }
        });
};

//logs out the person on the other end
exports.logout = function (req, res) { 
    req.session.destroy(function (err) { //destroys the session
        if (err) { //if there is an error destroying session
            console.log("Error Logging Out: ", err); //throws an error in the console that you didn't log out
            return 0;
        }
        res.status(200).send("logging out error");
    });
};

//once logged in 
exports.loggedIn = function (req, res) {
    if (req.session.loggedIn && req.session.authy) { //if user is logged in and the second one works
        res.status(200).json({url: "/protected"}); //this worked and post url
    } else if (req.session.loggedIn && !req.session.authy) { //if you logged in right and two factor failed you're still in
        res.status(200).json({url: "/2fa"});
    } else {
        res.status(409).send("Conflict with server!");
    }
};

//sms information
exports.sms = function (req, res) {
    var username = req.session.username; //grabs the persons username
    User.findOne({username: username}).exec(function (err, user) {//sends a text message to the phone number
        console.log("Send SMS"); //gets the info from the sms
        if (err) {
            console.log('SendSMS', err);
            res.status(500).send("Internal Service Error"); //returns an error
            return;
        }

        authy.requestSms({authyId: user.authyId}, {force: true}, function (err, smsRes) { //requests and message token from a user
            if (err) {
                console.log('ERROR requestSms', err); //if there is an error
                res.status(500).send("Internal Service Error");
                return;
            }
            console.log("requestSMS response: ", smsRes);
            res.status(200).json(smsRes); //if it works
        });

    });
};


//verify the token that is sent
exports.verify = function (req, res) {
    var username = req.session.username;
    User.findOne({username: username}).exec(function (err, user) {
        console.log("Verify Token");
        if (err) {
            console.error('Verify Token User Error: ', err);
            res.status(500).json(err);
        }
        authy.verifyToken({authyId: user.authyId, token: req.body.token}, function (err, tokenRes) {
            if (err) {
                console.log("Verify Token Error: ", err);
                res.status(500).json(err);
                return;
            }
            console.log("Verify Token Response: ", tokenRes);
            if (tokenRes.success) {
                req.session.authy = true;
				exports.login;
            }
            res.status(200).json(tokenRes);
        });
    });
};

exports.requestPhoneVerification = function (req, res) {
    var phone_number = req.body.phone_number;
    var country_code = req.body.country_code;
    var via = req.body.via;
	var user = req.body.username;

    console.log("body: ", req.body);

    if (phone_number && country_code && via) {
        phoneReg.requestPhoneVerification(phone_number, country_code, via, function (err, response) {
            if (err) {
                console.log('error creating phone reg request', err);
                res.status(500).json(err);
            } else {
                console.log('Success register phone API call: ', response);
                res.status(200).json(response);
				createSession(req, res, user)
            }
        });
    } else {
        console.log('Failed in Register Phone API Call', req.body);
        res.status(500).json({error: "Missing fields"});
    }

};

exports.verifyPhoneToken = function (req, res) {
    var country_code = req.body.country_code;
    var phone_number = req.body.phone_number;
    var token = req.body.token;
    
    if (phone_number && country_code && token) {
        phoneReg.verifyPhoneToken(phone_number, country_code, token, function (err, response) {
            if (err) {
                console.log('error creating phone reg request', err);
                res.status(500).json(err);
            } else {
                console.log('Confirm phone success confirming code: ', response);
                if (response.success) {
                    req.session.ph_verified = true;
					exports.login;
                }
                res.status(200).json(err);
            }

        });
    } else {
        console.log('Failed in Confirm Phone request body: ', req.body);
        res.status(500).json({error: "Missing fields"});
    }
};

function createSession(req, res, user) {
    req.session.regenerate(function () {
        req.session.loggedIn = true;
        req.session.user = user.id;
        req.session.username = user.username;
        req.session.msg = 'Authenticated as: ' + user.username;
        req.session.authy = false;
        req.session.ph_verified = false;
        res.status(200).json();
    });
}

exports.register = function (req, res) {

    var username = req.body.username;
    User.findOne({username: username}).exec(function (err, user) {
        if (err) {
            console.log('Rregistration Error', err);
            res.status(500).json(err);
            return;
        }
        if (user) {
            res.status(409).json({err: "Username Already Registered"});
            return;
        }

        user = new User({username: req.body.username});

        user.set('hashed_password', hashPW(req.body.password));
        user.set('email', req.body.email);
        user.set('authyId', null);
        user.save(function (err) {
            if (err) {
                console.log('Error Creating User', err);
                res.status(500).json(err);
            } else {

                authy.registerUser({
                    countryCode: req.body.country_code,
                    email: req.body.email,
                    phone: req.body.phone_number
                }, function (err, regRes) {
                    if (err) {
                        console.log('Error Registering User with Authy');
                        res.status(500).json(err);
                        return;
                    }

                    user.set('authyId', regRes.user.id);

                    // Save the AuthyID into the database then request an SMS
                    user.save(function (err) {
                        if (err) {
                            console.log('error saving user in authyId registration ', err);
                            res.session.error = err;
                            res.status(500).json(err);
                        } else {
                            createSession(req, res, user);
                        }
                    });
                });
            }
        });
    });
};