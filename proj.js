<!-- 
Name - Panther Epidemic
Date - 04/10/2019
Class - Software Development Methods and Tools
Author- Jennifer Palese
I did use a source to get this far in the two factor authenticator: https://www.npmjs.com/package/speakeasy
-->

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
