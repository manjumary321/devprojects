const { Client } = require('whatsapp-web.js');
// const fs = require('fs');
const qrcode = require('qrcode-terminal');


// // Path where the session data will be stored
// const SESSION_FILE_PATH = './session.json';

// // Load the session data if it has been previously saved
// let sessionData;
// if(fs.existsSync(SESSION_FILE_PATH)) {
//     sessionData = require(SESSION_FILE_PATH);
// }

const client = new Client();
// const client = new Client({
//     session: sessionData
// })

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    client.getChats().then(chats=>{
        console.log(chats[0]);
    });
});
client.on('message', message => {
	console.log(message.body);
});
 

// Save session values to the file upon successful auth
// client.on('authenticated', (session) => {
//     sessionData = session;
//     fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
//         if (err) {
//             console.error(err);
//         }
//     });
// });
 

// client.on('message', message => {
// 	if(message.body === '!ping') {
// 		client.sendMessage(message.from, 'pong');
// 	}
// });

client.initialize();