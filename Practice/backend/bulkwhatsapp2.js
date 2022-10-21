'use strict';


// const id = 'Provide your id';
// const token = 'Provide your token';

// // Importing the Twilio module
// const twilio = require('twilio');

// Creating a client
// const client = twilio(id, token);

var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

// const twilio = require('twilio')(accountSid, authToken, {
//     lazyLoading: true
// });

const twilio = require('twilio')(accountSid, authToken, {
    region: 'au1',
    edge: 'sydney',
});

// const client = require('twilio')(accountSid, authToken);
// client.region = 'au1';
// client.edge = 'sydney';

// Creating a client
const client = twilio(accountSid, authToken);

// Sending messages to the client
client.messages
	.create({
		
		// Message to be sent
		body: 'Hello from Geeks for Geeks',

		// Senders Number (Twilio Sandbox No.)
		from: 'whatsapp:+14155238886',
        // from: 'whatsapp:+919947803450',

		// Number receiving the message
		to: 'whatsapp:Provide your number'
	})
	.then(message => console.log("Message sent successfully"))
	.done();

	
	function twilio(username, password, opts) {
		opts = opts || {};
		var env = opts.env || process.env;
	  
		this.username = username || env.TWILIO_ACCOUNT_SID;
		this.password = password || env.TWILIO_AUTH_TOKEN;
		this.accountSid = opts.accountSid || this.username;
		this.httpClient = opts.httpClient || new RequestClient();
		this.region = opts.region;
	  
		if (!this.username) {
		  throw new Error('username is required');
		}
	  
		if (!this.password) {
		  throw new Error('password is required');
		}
	  
		if (!_.startsWith(this.accountSid, 'AC')) {
		  throw new Error('accountSid is required');
		}
	}
	twilio.prototype.validateSslCert = function validateSslCert() {
		return this.httpClient.request({
		  method: 'GET',
		  uri: 'https://api.twilio.com:8443/2010-04-01/.json',
		}).then((response) => {
		  if (response.statusCode < 200 || response.statusCode >= 300) {
			throw RestException(response);
		  }
	  
		  return response;
		});
	  };
	// module.exports = Twilio;