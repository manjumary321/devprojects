const id = 'Provide your id';
const token = 'Provide your token';

// Importing the Twilio module
const twilio = require('twilio');

// Creating a client
const client = twilio(id, token);

// Sending messages to the client
client.messages
	.create({
		
		// Message to be sent
		body: 'Hello from Geeks for Geeks',

		// Senders Number (Twilio Sandbox No.)
		from: 'whatsapp:+14155238886',

		// Number receiving the message
		to: 'whatsapp:Provide your number'
	})
	.then(message => console.log("Message sent successfully"))
	.done();
