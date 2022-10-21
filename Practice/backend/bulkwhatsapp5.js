require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
client.messages
  .create({
    body: "This is a test text message!!",
    from: "<FROM_NUMBER>",
    to: "<TO_NUMBER>",
  })
  .then(message => console.log(message))
  .catch(err => console.log(err));



// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.messages
//       .create({
//          from: 'whatsapp:+14155238886',
//          body: 'Hello there!',
//          to: 'whatsapp:+15005550006'
//        })
//       .then(message => console.log(message.sid));