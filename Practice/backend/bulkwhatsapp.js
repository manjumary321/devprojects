const fetch = require("node-fetch");

var botId = 'your-received-bot-id';
var phoneNbr = 'your-phone-number-which-is-whatsapp-enabled';
var bearerToken = 'your-received-bearer-token';


var url = 'https://us1.whatsapp.api.sinch.com/whatsapp/v1/' + botId + '/messages';
var data = {
  to: [phoneNbr],
  message: {
    type: 'text',
    text: 'Greetings from Sinch'
  }
};

var postReq = {
  method: "POST",
  headers: {
    'Authorization': 'Bearer ' + bearerToken,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
  json: true
};

fetch(url, postReq)

  .then(data => {
    return data.json()
  })
  .then(res => {
    console.log(res)
  })
  
  .catch(error => console.log(error));