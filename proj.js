var passport = require('passport');
var QRCode = require('qrcode');
var speakeasy = require('speakeasy'); //Ensure our speakeasy framework has been added

var secret = speakeasy.generateSecret({length: 20}); //gives a secret key of 32 characters

function Display()
{
	//two_factor_temp_secret = secret.base32; //stores the secret key that is length 32
	QRCode.toDataURL(secret.otpauth_url, function(err, image_data) {
		console.log(image_data);
		// Display this data URL to the user in an <img> tag
		write('<img src="' + image_url + '">');
	});
}

function Verify(input)
{
	var base32secret = two_factor_temp_secret;
	// Use verify() to check the token against the secret
	var verified = speakeasy.totp.verify({ secret: base32secret,
										   encoding: 'base32',
                                           token: input });
}