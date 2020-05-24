const sulla = require('sulla');
const stages = require('./stages');
const database = require('./database');

sulla.create().then((client) => start(client));

function start(client) {
  client.onMessage((message) => {
    console.log(message)
    if (message.body === '1') {
      client.sendText(message.from, '2');
    }
  });
}
 
const getStage = (user) => {
  return database[user].stage
}
